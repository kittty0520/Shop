import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Aside from '../components/Aside';

export default function SortedProducts() {
	const { sort } = useParams();
	console.log(sort);
	return (
		<main className='flex'>
			<Aside />
			<article></article>
		</main>
	);
}
