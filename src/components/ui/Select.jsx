import React from 'react';

export default function Select({ name, options, value, onChange }) {
	return (
		<label htmlFor={name} className='flex items-center gap-2'>
			<span className='w-1/6'>{name}</span>
			<select
				name={name}
				id={name}
				className='border p-2 w-5/6 outline-none'
				value={value}
				onChange={onChange}
			>
				<option value='' seleted disabled>
					해당되는 항목을 선택해주세요.
				</option>
				{options &&
					options.map((option, index) => (
						<option value={option} key={index}>
							{option}
						</option>
					))}
			</select>
		</label>
	);
}
