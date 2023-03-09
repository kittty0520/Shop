import React from 'react';

export default function Coupon({ per, description }) {
	return (
		<>
			<div className='flex text-white relative'>
				<div className='w-8 h-8 bg-white absolute rounded-full top-1/2 -left-4 -translate-y-1/2'></div>
				<div className='w-60 h-48 bg-gray-800  rounded-r-2xl flex  flex-col items-center justify-center'>
					<span className='text-lg'>COUPON</span>
					<span className='text-4xl font-semibold mb-3'>{per}%</span>
					<div className='border-b h-0.1 w-1/2s mb-1 bg-gray-300'></div>
					<p className='text-sm'>{description}</p>
				</div>
				<div className='w-20 h-48 bg-gray-800  rounded-l-2xl flex items-center justify-center'>
					<button className='border border-dashed py-2 px-4 cursor-pointer -rotate-90 rounded-sm'>
						DOWNLOAD
					</button>
				</div>
			</div>
		</>
	);
}
