import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className={styles.navbar}>
				<ul className={styles.nav_ul}>
					{/* <div className={styles.highlight}> */}
					<li className={styles.nav_list}>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(235, 199, 205)' } : {};
							}}
						>
							Welcome
						</NavLink>
					</li>
					<div className={styles.nav_hr} />
					{/* </div>   */}
					<li className={styles.nav_list}>
						<NavLink
							to='/services'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(235, 199, 205)' } : {};
							}}
						>
							What I Do
						</NavLink>
					</li>
					<div className={styles.nav_hr} />
					<li className={styles.nav_list}>
						<NavLink
							to='/mywork'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(235, 199, 205)' } : {};
							}}
						>
							My Work
						</NavLink>
					</li>
					<div className={styles.nav_hr} />

					<li className={styles.nav_list}>
						<NavLink
							to='/testimonials'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(235, 199, 205)' } : {};
							}}
						>
							Testimonials
						</NavLink>
					</li>
					<div className={styles.nav_hr} />

					<li className={styles.nav_list}>
						<NavLink
							to='/contact'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(235, 199, 205)' } : {};
							}}
						>
							Contact
						</NavLink>
					</li>
					<div className={styles.nav_hr} />
				</ul>
			</div>
		</>
	);
};

export default Navbar;
