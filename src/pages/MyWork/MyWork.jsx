import React from 'react';
import './myWork.scss';
import { workExperience } from './../../dataContent/data';

const MyWork = () => {
	return (
		<div className='myWork'>
			<div className='bg_Image'></div>
			<div className='outer_Container'>
				<div className='main_container'>
					<div className='work_desc'>
						<h1 className='headTitle'>WORK EXPERIENCE</h1>
					</div>

					<div className='cardsGroup'>
						{workExperience.map((item) => (
							<div className='card' key={item.key}>
								<div className='cardLeft'>
									{/* {props.servicesProps.icon} */}
									<h4>{item.year}</h4>
								</div>
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
	);
};

export default MyWork;
