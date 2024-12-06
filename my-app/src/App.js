import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// Императивный стиль везде, кроме функции getFullYear(). Ее использование - декларативный стиль.
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<h2>{new Date().getFullYear()}</h2>
			</header>
		</div>
	);
};

// Создание элементов - декларативный стиль
export const AppWithoutJSX = () => {
	const Logo = createElement('img', { className: 'App-logo', src: logo });
	const Text = createElement('p', null, 'Edit ', createElement('code', null, 'src/App.js'), ' and save to reload.');
	const Link = createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Learn React',
	);
	const Year = createElement('h2', null, `${new Date().getFullYear()}`);
	const Header = createElement('header', { className: 'App-header' }, Logo, Text, Link, Year);

	return createElement('div', { className: 'App' }, Header);
};
