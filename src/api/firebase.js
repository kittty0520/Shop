import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { get, getDatabase, ref, remove, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DAMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export function login() {
	provider.setCustomParameters({
		prompt: 'select_account',
	});

	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			console.log(user);
			return user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
}

export function logout() {
	signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
	//1. 사용자가 있는 경우에(로그인한 경우)
	onAuthStateChanged(auth, async (user) => {
		//2. 사용자가 어드민 권한을 가지고 있는지 확인!
		const updatedUser = user ? await adminUser(user) : null;
		callback(updatedUser);
	});
}

async function adminUser(user) {
	//3. {...user, isAdmin:true/false}
	return get(ref(db, 'admins'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const admins = snapshot.val();
				// console.log(admins);
				const isAdmin = admins.includes(user.uid);
				return { ...user, isAdmin };
			} else {
				console.log('No data available');
				return user;
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

export async function addNewProduct(product, imageUrl) {
	const id = uuid();
	return set(ref(db, `products/${id}`), {
		...product,
		id,
		price: parseInt(product.price),
		image: imageUrl,
		size: product.size.split(','),
	});
}

export async function getProducts() {
	return get(ref(db, 'products'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				return Object.values(snapshot.val());
			} else {
				console.log('No Data Available');
				return [];
			}
		})
		.catch(console.error);
}

export async function getCarts(userId) {
	return get(ref(db, `carts/${userId}`)).then((snapshot) => {
		const items = snapshot.val() || {};
		return Object.values(items);
	});
}

export async function addOrUpdateToCart(userId, product) {
	return set(ref(db, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
	return remove(ref(db, `carts/${userId}/${productId}`));
}
