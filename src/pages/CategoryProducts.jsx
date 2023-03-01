import React from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryProducts() {
	const { category } = useParams();
	console.log(category);
	return <div></div>;
}
