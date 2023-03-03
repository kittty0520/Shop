import React from 'react';

export default function Input({
	type,
	accept,
	name,
	placeholder,
	value,
	onChange,
}) {
	return (
		<label htmlFor={name} className='flex items-center gap-2'>
			<span className='w-1/6'>{name}</span>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				required
				value={value}
				onChange={onChange}
				className='border p-2 w-5/6 outline-none'
			/>
		</label>
	);
}
