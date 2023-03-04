import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
	product,
	product: { id, image, title, category, price, sort },
}) {
	const navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/products/${id}`, {
			state: { product },
		});
	};
	return (
		<li
			onClick={handleClick}
			className='hover:shadow-md overflow-hidden cursor-pointer transition-all '
		>
			<img src={image} alt={title} className='w-full ' />
			<div className='my-2 px-2 text-sm flex flex-col justify-between gap-1'>
				<h3 className='truncate font-semibold'>{title}</h3>
				<p className='text-gray-6'>{category}</p>
				<p className='mt-2 text-xs'>{`￦${price}`}</p>
			</div>
		</li>
	);
}
