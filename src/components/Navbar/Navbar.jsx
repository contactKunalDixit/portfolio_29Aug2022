import React from 'react';

import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

// eslint-disable-next-line react/prop-types
const Navbar = ({ menuModalOpens }) => {
	return (
		<React.Fragment>
			<div className='navbar'>
				<div className='navToggleButton mobileScreen'>
					<button
						onClick={() => {
							menuModalOpens();
							console.log('Working till Nav module');
						}}
					>
						<GiHamburgerMenu className='navToggleButton_Icon' />
					</button>
				</div>
				<ul className='nav_ul'>
					{/* <div className={styles.highlight}> */}
					<li className='nav_list'>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(72, 247, 87)' } : {};
							}}
						>
							Welcome
						</NavLink>
					</li>
					<div className='nav_hr' />
					{/* </div>   */}
					<li className='nav_list'>
						<NavLink
							to='/services'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(72, 247, 87)' } : {};
							}}
						>
							What I Do
						</NavLink>
					</li>
					<div className='nav_hr' />
					<li className='nav_list'>
						<NavLink
							to='/mywork'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(72, 247, 87)' } : {};
							}}
						>
							My Work
						</NavLink>
					</li>
					<div className='nav_hr' />

					<li className='nav_list'>
						<NavLink
							to='/testimonials'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(72, 247, 87)' } : {};
							}}
						>
							Testimonials
						</NavLink>
					</li>
					<div className='nav_hr' />

					<li className='nav_list'>
						<NavLink
							to='/contact'
							style={({ isActive }) => {
								return isActive ? { color: 'rgb(72, 247, 87)' } : {};
							}}
						>
							Contact
						</NavLink>
					</li>
					<div className='nav_hr' />
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
