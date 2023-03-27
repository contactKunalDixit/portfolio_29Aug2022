/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import './modal.scss';
import PortalReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

// import { MdClose } from 'react-icons/md';

const Modal = ({ isOpen, onClose }) => {
	const [modalState, setModalState] = useState(isOpen);

	useEffect(() => {
		setModalState(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		setModalState(!isOpen);
		onClose && onClose();
	};

	const handleBackdropClick = (e) => {
		if (e.target.classList.contains('modal-container')) {
			handleClose();
		}
	};

	return modalState
		? PortalReactDOM.createPortal(
				<div className='modal-container' onClick={handleBackdropClick}>
					<div className='modal-content'>
						<div className='buttonSec'>
							<button className='modal-close' onClick={handleClose}>
								{/* <MdClose></MdClose> */}X
							</button>
						</div>

						<div className='textContent'>
							<ul className='nav_ul'>
								{/* <div className={styles.highlight}> */}
								<li className='nav_list' onClick={handleClose}>
									<NavLink
										to='/'
										style={({ isActive }) => {
											return isActive ? { color: 'rgb(72, 247, 87)' } : {};
										}}
									>
										WELCOME
									</NavLink>
								</li>
								<div className='nav_hr' />
								{/* </div>   */}
								<li className='nav_list' onClick={handleClose}>
									<NavLink
										to='/services'
										style={({ isActive }) => {
											return isActive ? { color: 'rgb(72, 247, 87)' } : {};
										}}
									>
										WHAT I DO
									</NavLink>
								</li>
								<div className='nav_hr' />
								<li className='nav_list' onClick={handleClose}>
									<NavLink
										to='/mywork'
										style={({ isActive }) => {
											return isActive ? { color: 'rgb(72, 247, 87)' } : {};
										}}
									>
										MY WORK
									</NavLink>
								</li>
								<div className='nav_hr' />

								<li className='nav_list' onClick={handleClose}>
									<NavLink
										to='/testimonials'
										style={({ isActive }) => {
											return isActive ? { color: 'rgb(72, 247, 87)' } : {};
										}}
									>
										TESTIMONIALS
									</NavLink>
								</li>
								<div className='nav_hr' />

								<li className='nav_list' onClick={handleClose}>
									<NavLink
										to='/contact'
										style={({ isActive }) => {
											return isActive ? { color: 'rgb(72, 247, 87)' } : {};
										}}
									>
										CONTACT
									</NavLink>
								</li>
								<div className='nav_hr' />
							</ul>
						</div>
					</div>
				</div>,
				document.getElementById('modal-root')
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )
		: null;
};

export default Modal;
