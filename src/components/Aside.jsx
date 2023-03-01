import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
	return (
		<aside>
			<ul>
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
