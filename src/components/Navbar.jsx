import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import CartStatus from './CartStatus';

export default function Navbar() {
	const { user, login, logout } = useAuthContext();
	return (
		<header className='flex justify-between items-center w-full p-2 border-b border-gray-800'>
			<Link to='/' className='w-36 h-12 mr-4 flex-shrink-0'>
				<h1 className='text-white bg-gray-800 font-bold text-lg text-center py-2'>
					Shop for You
				</h1>
			</Link>
			<nav className='flex justify-between items-center basis-3/4'>
				<ul className='flex gap-8 font-semibold'>
					<li>
						<Link to='/products/woman'>Woman</Link>
					</li>
					<li>
						<Link to='/products/man'>Man</Link>
					</li>
					<li>
						<Link to='/products/beauty'>Beauty</Link>
					</li>
					<li>
						<Link to='/products/kids'>Kids</Link>
					</li>
				</ul>
				<div className='flex items-center gap-2'>
					{user && (
						<Link to='/cart'>
							<CartStatus />
						</Link>
					)}
					{user && user.isAdmin && (
						<Link to='/products/new' className='text-2xl'>
							<MdOutlineAddCircleOutline />
						</Link>
					)}
					{user && <User user={user} />}
					{!user && <Button onClick={login} text={'login'} />}
					{user && <Button onClick={logout} text={'logout'} />}
				</div>
			</nav>
		</header>
	);
}
