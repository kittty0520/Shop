import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';

export default function Navbar() {
	const { user, login, logout } = useAuthContext();
	console.log(user);
	return (
		<header className='flex justify-between'>
			<Link to='/'>
				<h1>Shop for You</h1>
			</Link>
			<nav>
				<ul className='flex'>
					<li>
						<Link to='/woman'>Woman</Link>
					</li>
					<li>
						<Link to='/man'>Man</Link>
					</li>
					<li>
						<Link to='/beauty'>Beauty</Link>
					</li>
					<li>
						<Link to='/kids'>Kids</Link>
					</li>
				</ul>
				<div className='flex'>
					{user && <User user={user} />}
					{!user && <Button onClick={login} text={'login'} />}
					{user && <Button onClick={logout} text={'logout'} />}
				</div>
			</nav>
		</header>
	);
}
