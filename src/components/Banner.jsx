import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
function CustumNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'transparent',
				right: '20px',
			}}
			onClick={onClick}
		>
			<AiOutlineArrowRight className='relative -top-4 text-white text-3xl' />
		</div>
	);
}

function CustumPrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'transparent',
				left: '20px',
				zIndex: 10,
			}}
			onClick={onClick}
		>
			<AiOutlineArrowLeft className='relative -top-4 text-white text-3xl' />
		</div>
	);
}

export default function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		prevArrow: <CustumPrevArrow />,
		nextArrow: <CustumNextArrow />,
		appendDots: (dots) => (
			<div
				style={{
					backgroundColor: 'transparent',
					position: 'absolute',
					bottom: '25px',
					display: 'block',
					width: '100%',
					padding: 0,
					margin: 0,
					listStyle: 'none',
					textAlign: 'center',
				}}
			>
				<ul> {dots} </ul>
			</div>
		),
	};
	return (
		<div className='absolute left-0 w-full mt-6'>
			<Slider {...settings}>
				<div className='bg-red-300'>
					<Slide
						title={'RED DRESSOR'}
						imgPath={'banner01.jpg'}
						photographer={'Tide_trasher_x'}
						bannerPath={'category/woman'}
					/>
				</div>
				<div className='bg-stone-400'>
					<Slide
						title={'WHITE DRESSOR'}
						imgPath={'banner02.jpg'}
						photographer={'Isabela Drasovean'}
						bannerPath={'category/woman'}
					/>
				</div>
				<div className='bg-zinc-400'>
					<Slide
						title={'MAN SUITE'}
						imgPath={'banner03.jpg'}
						photographer={'Anis Salkic'}
						bannerPath={'category/man'}
					/>
				</div>
			</Slider>
		</div>
	);
}
