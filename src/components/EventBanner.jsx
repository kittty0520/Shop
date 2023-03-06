import React from 'react';

export default function EventBanner() {
	return (
		<div className='w-full h-60 my-4 bg-orange-300 relative overflow-hidden'>
			<img src='../image/banner.jpg' alt='eventBanner' className='opacity-80' />
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center'>
				<h3 className='text-2xl font-semibold mb-4'>NEW COLLECTION ARRIVED</h3>
				<p>따뜻한 봄을 맞이하는 23SS 신상</p>
				<button className='border border-white py-1 px-2 mt-2'>바로가기</button>
			</div>
		</div>
	);
}
