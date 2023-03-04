import React from 'react';

export default function Slide({ title, imgPath, photographer }) {
	return (
		<div className='w-full h-96 overflow-hidden flex items-center justify-between relative'>
			<img src={`image/${imgPath}`} alt='banner03' className='w-96' />
			<div className='w-1/3 flex flex-col  items-center'>
				<p className='text-3xl text-white font-semibold mb-4'>{title}</p>
				<button className='px-4 py-2 border border-gray-50 text-white'>
					바로가기
				</button>
			</div>
			<img
				src={`image/${imgPath}`}
				alt='banner03'
				className='w-96 hidden md:block'
			/>
			<span className='absolute bottom-1 left-2 text-gray-400 text-sm'>
				사진:Unsplash의 {photographer}
			</span>
		</div>
	);
}
