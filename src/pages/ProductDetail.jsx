import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { BsChevronRight } from 'react-icons/bs';
import useCarts from '../hooks/useCarts';

export default function ProductDetail() {
	const {
		state: {
			product: { id, image, title, category, description, price, size },
		},
	} = useLocation();
	const [selected, setSeleted] = useState(size && size[0]);
	const [success, setSuccess] = useState();
	const { addOrUpdateItem } = useCarts();
	const handleSelect = (e) => {
		setSeleted(e.target.value);
	};
	const handleClick = (e) => {
		const product = { id, image, title, price, option: selected, quantity: 1 };
		addOrUpdateItem.mutate(product, {
			onSuccess: () => {
				setSuccess('✔제품이 장바구니에 추가되었습니다.');
				setTimeout(() => setSuccess(null), 3000);
			},
		});
	};
	return (
		<section className='flex flex-col sm:flex-row max-w-6xl m-auto p-4'>
			<div className='w-full px-4 basis-7/12 '>
				<p className='mb-2 text-gray-700'>
					<BsChevronRight className='inline-block -mt-1' />
					{category}
				</p>
				<img src={image} alt={title} />
			</div>
			<div className='w-full basis-5/12 flex flex-col p-4 mt-3'>
				<h2 className='text-3xl font-bold py-2'>{title}</h2>
				<p className='text-xl font-bold border-b border-gray-400 py-2'>
					￦{price}
				</p>
				<p className='py-2 text-md'>{description}</p>

				<div className='flex items-center py-2'>
					<label className='font-bold' htmlFor='options'>
						Options :{' '}
						<select
							className='p-2 m-4 flex-1 border-2 border-gray-600 outline-none'
							name='size'
							id='options'
							value={selected}
							onChange={handleSelect}
						>
							{size &&
								size.map((option, index) => (
									<option key={index}>{option}</option>
								))}
						</select>
					</label>
				</div>
				<Button text='장바구니 추가' onClick={handleClick} />
				{success && <p className='my-2'>{success}</p>}
			</div>
		</section>
	);
}
