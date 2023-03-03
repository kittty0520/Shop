import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Aside() {
	const { sort } = useParams();
	return (
		<aside className='flex-shrink-0 w-60 h-full m-4 p-4 border-r border-gray-800'>
			<div className='mb-4  pb-4 border-b-2 border-gray-800'>
				<h2 className='text-2xl font-semibold'>{sort}</h2>
			</div>
			<ul className='flex flex-col gap-3 text-lg'>
				<li>
					<Link to='outer' state={{ state: sort }}>
						OUTER
					</Link>
				</li>
				<li>
					<Link to='top' state={{ state: sort }}>
						TOP
					</Link>
				</li>
				<li>
					<Link to='bottom' state={{ state: sort }}>
						BOTTOM
					</Link>
				</li>
				{/* {sort === 'woman' && (
					<li>
						<Link to='onepiece' state={{ state: sort }}>
							ONE PIECE
						</Link>
					</li>
				)} */}
				<li>
					<Link to='bag' state={{ state: sort }}>
						BAG
					</Link>
				</li>
				<li>
					<Link to='acc' state={{ state: sort }}>
						ACC
					</Link>
				</li>
			</ul>
		</aside>
	);
}
