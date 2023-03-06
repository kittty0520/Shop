import React from 'react';
import { FaUser } from 'react-icons/fa';
export default function User({ user: { photoURL, displayName } }) {
	return (
		<div className='flex items-center shrink-0'>
			{/* <img
				src={photoURL}
				alt={displayName}
				className='w-10 h-10 mr-2 rounded-full'
			/> */}
			<FaUser className='text-2xl' />
			{/* <span className='hidden md:block'>{displayName}</span> */}
		</div>
	);
}
