import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCarts, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCarts() {
	const { uid } = useAuthContext();
	const queryClient = useQueryClient();
	const cartsQuery = useQuery(['carts', uid || ''], () => getCarts(uid), {
		enabled: !!uid, // !!연산자는 undefined,'',0일 경우 결과를 false로 반환한다.
	});

	const addOrUpdateItem = useMutation(
		(product) => addOrUpdateToCart(uid, product),
		{
			onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
		}
	);

	const removeItem = useMutation((id) => removeFromCart(uid, id), {
		onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
	});
	return { cartsQuery, addOrUpdateItem, removeItem };
}
