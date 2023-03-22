import React from 'react';
import './testimonials.scss';
import { testimonials } from '../../dataContent/data';

const Testimonials = () => {
	return (
		<div className='testimonials'>
			<div className='bg_Image'></div>
			<div className='outer_Container'>
				<div className='main_container'>
					<div className='work_desc'>
						<h1 className='headTitle'>Recommendations and Feedback</h1>
					</div>

					<div className='cardsGroup'>
						{testimonials.map((item) => (
							<div className='card' key={item.key}>
								{/* ! ADD PICS LATER   */}
								{/* <div className='cardLeft'>
									{props.servicesProps.icon}
									<h4>{item.year}</h4>
								</div> */}
								<div className='cardRight'>
									<p> {item.desc}</p>
									<h4>{item.title}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
