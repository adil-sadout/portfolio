
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PageNotFound from 'pages/PageNotFound';


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={HomePage} />
				<Route path="/Portfolio-with-ReactJS/" Component={HomePage} />
				<Route path="*" Component={PageNotFound} />
			</Routes>
		</BrowserRouter>
	);
}