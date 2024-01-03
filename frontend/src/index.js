import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyles from './assets/styles/globalStyles';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<GlobalStyles />
				<App />
			</>
		),
		errorElement: <Error />,
		children: [
			{ index: true, path: '/', element: <Main /> },
			{
				index: true,
				path: '/cart',
				element: <Cart />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);

reportWebVitals();
