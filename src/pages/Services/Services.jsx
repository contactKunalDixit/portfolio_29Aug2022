/* eslint-disable react/prop-types */
import React from 'react';

import './services.scss';

const Services = (props) => {
	return (
		<>
			<div className='services'>
				<div className='bg_Image'></div>
				<div className='outer_Container'>
					<div className='main_container'>
						<div className='service_desc'>
							<h1 className='headTitle'>WHAT I DO</h1>
							<p className='paraDesc'>
								I handhold customers and bring them closer to the business.
							</p>
							<p className='paraDesc'>
								It is during the initial phases of the customer cycle that the
								foundation for the relationship between the customer and the
								business is laid, making it a crucial deciding factor.
								Proactively reaching out to customers and providing
								comprehensive support not only helps them to adapt to the
								product but also contributes to creating a positive and
								wholesome experience.
							</p>
							<p className='paraDesc'>
								By addressing their hesitancies and enabling them to adapt to
								the product or service, customers are more likely to feel
								comfortable using it and get the most out of the services
								offered. This, in turn, leads to higher Net Promoter Score (NPS)
								for businesses as satisfied customers are more likely to
								recommend the product or service to others.
							</p>
						</div>

						<div className='cardsGroup'>
							{props.servicesProps.map((item) => (
								<div className='card' key={item.key}>
									<div className='cardLeft'>{props.servicesProps.icon}</div>
									<div className='cardRight'>
										<h4>{item.title}</h4>
										<p> {item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
