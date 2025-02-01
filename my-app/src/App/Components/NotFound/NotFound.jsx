import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useEffect } from 'react';
import styles from './NotFound.module.css';

export const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => navigate('/Error/404'), [navigate]);

	return (
		<div className={styles.notFoundContainer}>
			<h1 className={styles.header}>Error 404</h1>
			<p className={styles.message}>Page not found</p>
			<Button>
				<NavLink className={styles.link} to="/">
					Вернуться на главную страницу
				</NavLink>
			</Button>
		</div>
	);
};
