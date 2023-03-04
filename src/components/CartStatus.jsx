import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import useCarts from '../hooks/useCarts';
export default function CartStatus() {
	const {
		cartsQuery: { data: products },
	} = useCarts();
	return (
		<div className='relative'>
			<BsFillCartFill className='text-2xl' />
			{products && (
				<p className='w-4 h-4 text-xs text-center leading-4  bg-brand text-white rounded-full absolute -top-1 -right-2 '>
					{products.length}
				</p>
			)}
		</div>
	);
}
