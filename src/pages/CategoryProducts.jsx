import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CategorizedProducts from '../components/CategorizedProducts';

export default function CategoryProducts() {
	const { category } = useParams();
	const {
		state: { state: sort },
	} = useLocation();
	console.log(sort);
	return (
		<section className='p-4'>
			<CategorizedProducts sort={sort} filter={category} />
		</section>
	);
}
