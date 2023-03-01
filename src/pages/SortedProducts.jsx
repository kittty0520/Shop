import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';

export default function SortedProducts() {
	return (
		<main className='flex'>
			<Aside />
			<Outlet />
		</main>
	);
}
