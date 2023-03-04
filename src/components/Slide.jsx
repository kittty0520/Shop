import React from 'react';

export default function Slide() {
	return (
		<div>
			<div className='w-full h-96 overflow-hidden flex items-center justify-between relative bg-zinc-400'>
				<img src='image/banner03.jpg' alt='banner03' className='w-96' />
				<div className='w-1/3 flex flex-col  items-center'>
					<p className='text-3xl text-white font-semibold mb-4'>MAN SUITE</p>
					<button className='px-4 py-2 border border-gray-50 text-white'>
						바로가기
					</button>
				</div>
				<img
					src='image/banner03.jpg'
					alt='banner03'
					className='w-96 hidden md:block'
				/>
				<span className='absolute bottom-1 left-2 text-gray-400 text-sm'>
					사진:{' '}
					<a href='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/JPe8YBHs2Wo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
						Unsplash
					</a>
					의
					<a href='https://unsplash.com/@assaart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
						Anis Salkic
					</a>
				</span>
			</div>
		</div>
	);
}
