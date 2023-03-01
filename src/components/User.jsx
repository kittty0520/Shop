import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
	return (
		<div className='flex items-center shrink-0'>
			<img
				src={photoURL}
				alt={displayName}
				className='w-10 h-10 mr-2 rounded-full'
			/>
			<span className='hidden md:block'>{displayName}</span>
		</div>
	);
}
