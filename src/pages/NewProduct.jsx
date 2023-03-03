import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import useProducts from '../hooks/useProducts';
import { RiImageFill } from 'react-icons/ri';

export default function NewProduct() {
	const [product, setProduct] = useState({});
	const [file, setFile] = useState();
	const [success, setSuccess] = useState();
	const [isUploading, setUploading] = useState(false);
	const { addProduct } = useProducts();
	const sort = ['woman', 'man', 'beauty', 'kids'];
	const category = ['outer', 'top', 'bottom', 'bag', 'acc'];
	// const selectoption = document.getElementsByName('sort');
	// console.log(selectoption);
	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === 'file') {
			setFile(files && files[0]);
			return;
		}
		setProduct((product) => ({ ...product, [name]: value })); //각 input 컴포넌트의 value를 product 객체에 추가함
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUploading(true);
		uploadImage(file)
			.then((url) => {
				addProduct.mutate(
					{ product, url },
					{
						onSuccess: () => {
							setSuccess('✔성공적으로 제품이 등록되었습니다.');
							setTimeout(() => setSuccess(null), 3000);
						},
					}
				);
			})
			.finally(() => setUploading(false));
	};
	return (
		<section className='text-center w-full relative flex flex-col md:flex-row gap-6 pt-20 items-center justify-center'>
			<h2 className='absolute top-1 left-1/2 -translate-x-1/2 text-xl font-semibold my-4'>
				새로운 제품 등록
			</h2>
			{success && <p className='absolute -bottom-8 w-full'>{success}</p>}
			{!file && (
				<div className='w-48 h-72 border-2 border-gray-700 text-center flex flex-col items-center justify-center gap-4'>
					<span>
						이미지 파일을 <br />
						선택해주세요.
					</span>
					<span className='text-6xl text-gray-800'>
						<RiImageFill />
					</span>
				</div>
			)}
			{file && (
				<img
					src={URL.createObjectURL(file)}
					alt='local file'
					className='w-48'
				/>
			)}
			<form
				action='post'
				onSubmit={handleSubmit}
				className='flex flex-col gap-2 w-full md:w-3/5 px-6 text-sm '
			>
				<Input
					type={'file'}
					accept={'image/*'}
					name={'file'}
					onChange={handleChange}
				/>
				<Select
					name={'sort'}
					options={sort}
					value={product.sort ?? ''}
					onChange={handleChange}
				/>
				<Select
					name={'category'}
					options={category}
					value={product.category ?? ''}
					onChange={handleChange}
				/>

				{/* ??는 null이거나 undefined인 경우에 ''를 반환한다. */}
				<Input
					type={'text'}
					placeholder={'제품명'}
					name={'title'}
					value={product.title ?? ''}
					onChange={handleChange}
				/>
				<Input
					type={'text'}
					placeholder={'가격'}
					name={'price'}
					value={product.price ?? ''}
					onChange={handleChange}
				/>
				<Input
					type={'text'}
					placeholder={'설명'}
					name={'description'}
					value={product.description ?? ''}
					onChange={handleChange}
				/>
				<Input
					type={'text'}
					placeholder={'사이즈들을 콤마(,)로 구분하여 입력하세요'}
					name={'size'}
					value={product.size ?? ''}
					onChange={handleChange}
				/>

				<Button
					text={isUploading ? '업로드중...' : '제품 등록하기'}
					className='pt-6'
				></Button>
			</form>
		</section>
	);
}
