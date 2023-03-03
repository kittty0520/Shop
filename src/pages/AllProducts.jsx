import React from 'react';
import { useParams } from 'react-router-dom';
import CategorizedProducts from '../components/CategorizedProducts';
import Coupon from '../components/Coupon';
import EventBanner from '../components/EventBanner';

export default function AllProducts() {
	const { sort } = useParams();
	const category = ['outer', 'top', 'bottom', 'bag', 'acc'];
	return (
		<section className='flex flex-col gap-8'>
			<EventBanner />
			<div className='flex flex-col gap-2'>
				<h2 className='w-full my-4 text-2xl font-semi'>Coupon</h2>
				<div className='flex gap-4'>
					<Coupon per={'12'} description={'3월 전체 쿠폰'} />
					<Coupon per={'5'} description={'단 3일만! 추가 쿠폰'} />
				</div>
			</div>
			{category.map((element, index) => (
				<CategorizedProducts key={index} sort={sort} filter={element} />
			))}
		</section>
	);
}
