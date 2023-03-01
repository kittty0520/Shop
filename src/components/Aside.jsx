import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Aside() {
	const { sort } = useParams();
	return (
		<aside className='w-60 h-full p-5 m-5 border-r border-gray-800'>
			<div className='mb-4  pb-4 border-b-2 border-gray-800'>
				<h2 className='text-2xl font-semibold'>{sort}</h2>
			</div>
			<ul className='flex flex-col gap-3 text-lg'>
				<li>
					<Link to='all'>ALL</Link>
				</li>
				<li>
					<Link to='outer'>OUTER</Link>
				</li>
				<li>
					<Link to='top'>TOP</Link>
				</li>
				<li>
					<Link to='bottom'>BOTTOM</Link>
				</li>
				<li>
					<Link to='bag'>BAG</Link>
				</li>
				<li>
					<Link to='acc'>ACC</Link>
				</li>
			</ul>
		</aside>
	);
}
