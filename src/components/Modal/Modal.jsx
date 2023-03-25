/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import './modal.scss';
import PortalReactDOM from 'react-dom';

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
						<button className='modal-close' onClick={handleClose}>
							&times;
						</button>
						<div className='textContent'>
							<h2>Thank You!</h2>
							<br />
							<p>Wow!</p>
							<br />
							<p>
								I thrilled to have caught your attention and appreciate you
								taking the time to reach out to me.
							</p>
							<br />
							<p>
								I value your feedback and look forward to responding promptly.
							</p>
							<br />
							<p>
								Regards,
								<br /> Kunal D.
							</p>
						</div>
					</div>
				</div>,
				document.getElementById('modal-root')
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )
		: null;
};

export default Modal;
