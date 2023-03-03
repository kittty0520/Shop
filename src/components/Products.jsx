import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function Products() {
	const {
		productsQuery: { isLoading, error, data: products },
	} = useProducts();
	return (
		<section className='mt-96 pt-7'>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<h2 className='w-full mt-4 text-center text-2xl font-semi'>ALL</h2>
			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</ul>
		</section>
	);
}
