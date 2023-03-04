import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import useCarts from '../hooks/useCarts';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';

const SHIPPING = 3000;

export default function MyCart() {
	const {
		cartsQuery: { isLoading, data: products },
	} = useCarts();

	if (isLoading) return <p>Loading...</p>;

	const hasProducts = products && products.length > 0;
	const totalPrice =
		products &&
		products.reduce(
			(prev, current) => prev + parseInt(current.price) * current.quantity,
			0
		);
	//quantity값은 productDetail페이지에서 장바구니추가버튼을 누를때 product객체에 추가됨

	return (
		<section className='py-4 px-8 flex flex-col'>
			<p className='text-2xl text-center font-semibold border-b border-gray-700 pb-4'>
				내 장바구니
			</p>
			{!hasProducts && <p>장바구니가 비어있습니다.</p>}
			{hasProducts && (
				<ul className='border-b border-gray-700 mb-4 p-4'>
					{products.map((product) => (
						<CartItem key={product.id} product={product} />
					))}
				</ul>
			)}
			<div className='flex justify-between items-center p-2 md:px-8 lg:px-16 mb-6'>
				<PriceCard text='상품 총액' price={totalPrice} />
				<AiFillPlusCircle className='shrink-0' />
				<PriceCard text='배송액' price={SHIPPING} />
				<FaEquals className='shrink-0' />
				<PriceCard text='총 가격' price={totalPrice + SHIPPING} />
			</div>
			<Button text='주문하기' />
		</section>
	);
}
