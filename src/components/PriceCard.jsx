import React from 'react';

export default function PriceCard({ text, price }) {
	return (
		<div className='bg-gray-100 p-8 mx-2  text-center text-lg md:text-xl'>
			<p>{text}</p>
			<p className='text-brand mt-2 font-semibold'>￦{price}</p>
		</div>
	);
}
