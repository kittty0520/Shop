import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';

export default function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className='absolute left-0 w-full mt-6'>
			<Slider {...settings}>
				<div className='bg-red-300'>
					<Slide
						title={'RED DRESSOR'}
						imgPath={'banner01.jpg'}
						photographer={'Tide_trasher_x'}
					/>
				</div>
				<div className='bg-stone-400'>
					<Slide
						title={'WHITE DRESSOR'}
						imgPath={'banner02.jpg'}
						photographer={'Isabela Drasovean'}
					/>
				</div>
				<div className='bg-zinc-400'>
					<Slide
						title={'MAN SUITE'}
						imgPath={'banner03.jpg'}
						photographer={'Anis Salkic'}
					/>
				</div>
			</Slider>
		</div>
	);
}
