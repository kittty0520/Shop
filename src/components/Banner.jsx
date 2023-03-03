import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className='absolute left-0 w-full'>
			<Slider {...settings}>
				<div>
					<div className='w-full h-96 overflow-hidden flex items-center justify-between relative bg-red-300'>
						<img src='image/banner01.jpg' alt='banner01' className='w-96' />
						<div className='w-1/3 flex flex-col  items-center'>
							<p className='text-3xl text-white font-semibold mb-4'>
								RED DRESSOR
							</p>
							<button className='px-4 py-2 border border-gray-50 text-white'>
								바로가기
							</button>
						</div>
						<img
							src='image/banner01.jpg'
							alt='banner01'
							className='w-96 hidden md:block'
						/>
						<span className='absolute bottom-1 left-2'>
							사진:{' '}
							<a href='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/6Uar_aOhCGc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
								Unsplash
							</a>
							의
							<a href='https://unsplash.com/@tide_trasher_x?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
								Tide_trasher_x
							</a>
						</span>
					</div>
				</div>
				<div>
					<div className='w-full h-96 overflow-hidden flex items-center justify-between relative bg-stone-400'>
						<img src='image/banner02.jpg' alt='banner02' className='w-96' />
						<div className='w-1/3  flex flex-col  items-center'>
							<p className='text-3xl text-white font-semibold mb-4'>
								WHITE DRESSOR
							</p>
							<button className='px-4 py-2 border border-gray-50 text-white'>
								바로가기
							</button>
						</div>
						<img
							src='image/banner02.jpg'
							alt='banner02'
							className='w-96 hidden md:block'
						/>
						<span className='absolute bottom-1 left-2'>
							사진:{' '}
							<a href='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/g06TCxFrSWc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
								Unsplash
							</a>
							의
							<a href='https://unsplash.com/@isabeladrasovean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
								Isabela Drasovean
							</a>
						</span>
					</div>
				</div>
				<div>
					<div className='w-full h-96 overflow-hidden flex items-center justify-between relative bg-zinc-400'>
						<img src='image/banner03.jpg' alt='banner03' className='w-96' />
						<div className='w-1/3 flex flex-col  items-center'>
							<p className='text-3xl text-white font-semibold mb-4'>
								MAN SUITE
							</p>
							<button className='px-4 py-2 border border-gray-50 text-white'>
								바로가기
							</button>
						</div>
						<img
							src='image/banner03.jpg'
							alt='banner03'
							className='w-96 hidden md:block'
						/>
						<span className='absolute bottom-1 left-2'>
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
			</Slider>
		</div>
	);
}
