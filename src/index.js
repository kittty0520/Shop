import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import SortedProducts from './pages/SortedProducts';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import AllProducts from './pages/AllProducts';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, path: '/', element: <Home /> },
			{
				path: '/category/:sort',
				element: <SortedProducts />,
				children: [
					{ index: true, path: '/category/:sort', element: <AllProducts /> },
					{
						path: '/category/:sort/:category',
						element: <CategoryProducts />,
					},
				],
			},
			{ path: '/products/:id', element: <ProductDetail /> },
			{ path: '/products/new', element: <NewProduct /> },
			{
				path: '/cart',
				element: (
					<ProtectedRoute>
						<MyCart />
					</ProtectedRoute>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
