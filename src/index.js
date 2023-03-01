import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import SortedProducts from './pages/SortedProducts';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import Woman from './pages/Woman';
import Man from './pages/Man';
import Beauty from './pages/Beauty';
import Kids from './pages/Kids';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, path: '/', element: <Home /> },
			{ path: '/:sort', element: <SortedProducts /> },
			// { path: '/woman', element: <Woman /> },
			// { path: '/man', element: <Man /> },
			// { path: '/beauty', element: <Beauty /> },
			// { path: '/kids', element: <Kids /> },
			{ path: '/:sort/:category', element: <CategoryProducts /> },
			{ path: '/products/:id', element: <ProductDetail /> },
			{ path: '/product/new', element: <NewProduct /> },
			{ path: '/product/cart', element: <MyCart /> },
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
