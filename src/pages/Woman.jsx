import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';

export default function Woman() {
	return (
		<main className='flex'>
			<Aside />
			<Outlet />
		</main>
	);
}
