import React, { useState } from 'react';
/* eslint-disable react/react-in-jsx-scope */
// import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import WelcomeIntro from './pages/WelcomeIntro/WelcomeIntro';
import MyWork from './pages/MyWork/MyWork';
import Services from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { servicesSection } from './dataContent/data';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/Modal/Modal';

function App() {
	const [modalOpen, setModalOpen] = useState(false);

	let menuModalOpens = () => {
		console.log('triggered');
		setModalOpen(true);
	};

	// ! Modal functions:

	const handleCloseModal = () => {
		setModalOpen(false);
	};
	return (
		<div className='container-fluid-error'>
			<div className='App'>
				<div className='mainContainer_left'>
					<Navbar menuModalOpens={menuModalOpens}></Navbar>
				</div>
				<div className='mainContainer_right'>
					<Routes>
						<Route path='/' element={<WelcomeIntro />} index />
						<Route
							path='/services'
							element={<Services servicesProps={servicesSection}></Services>}
						/>
						<Route path='/mywork' element={<MyWork />} />
						<Route path='/testimonials' element={<Testimonials />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>

				<Modal isOpen={modalOpen} onClose={handleCloseModal}></Modal>
			</div>
		</div>
	);
}

export default App;
