import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// console.log(<App />);

root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
);
