import React from 'react';
// import styles from './welcomeIntro.module.css';
import './welcomeIntro.scss';
const WelcomeIntro = () => {
	return (
		<div className='welcomeIntro'>
			<div className='bg_Image'></div>
			<div className='OuterContainer'>
				<div className='main_container'>
					<h1 className='headTitle'>
						KUNAL DIXIT
						<br />
					</h1>
					<div className='subTitleSection'>
						<h2 className='subTitle'>
							Specialing in managing Customer Success, Application and Systems
							Knowledge management, product implementation, and driving product
							adoption initiatives in IT-enabled and cloud-based ecosystem.
						</h2>

						<h2 className='subTitle'>
							Extensive experience in collaborating closely with account
							management and technology teams to evaluate client business and
							organizational readiness, and to create effective adoption
							strategies and programs that drive successful digital
							transformation.
						</h2>
						<h2 className='subTitle'>
							Recognized for demonstrating proficiency in relationship and
							change management for facilitating easy adoption of technology
							driven solutions, implementing high-performance learning journeys,
							and for using the Agile principles to successfully manage Account
							management and project aspects like implementation, product
							deployment, knowledge transfer and more.
						</h2>
					</div>

					<button type='button' className='Navbutton'>
						SEE WHAT I CAN DO
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeIntro;
