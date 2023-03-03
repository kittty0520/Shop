import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function CategorizedProducts({ filter, sort }) {
	const {
		productsQuery: { isLoading, error, data: products },
	} = useProducts();
	const FilteredProducts = products.filter(
		(product) => product.sort === sort && product.category === filter
	);
	console.log(FilteredProducts);
	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<h2 className='w-full my-4 text-2xl font-semi'>{filter}</h2>
			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4'>
				{FilteredProducts &&
					FilteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				{FilteredProducts.length === 0 && <p>😓상품을 준비중입니다.</p>}
			</ul>
		</div>
	);
}
