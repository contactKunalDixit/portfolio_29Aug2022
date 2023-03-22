import React from 'react';
import './contact.scss';
// import Footer from '../../components/Footer/Footer';
import Phone from './../../images/phone.png';
import Email from './../../images/email.png';
import linkedin from './../../images/linkedin.png';
// import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<>
			<div className='contact'>
				<div className='bg_Image'></div>
				<div className='outer_Container'>
					<div className='main_container'>
						<div className='work_desc'>
							<h1 className='headTitle'>Let&apos;s Connect</h1>
						</div>
						<div className='contentPart'>
							<div className='cardsGroup'>
								<h4>
									If your organization is seeking a professional with expertise
									in :
								</h4>
								<ul>
									<li>Customer support management</li>
									<li>Platform/systems knowledge management</li>
									<li>Application demonstrations</li>
									<li>Implementation management</li>
									<li>Training portfolio management</li>
									<li>Relationship management</li>
									<li>Adult training methodologies</li>
									<li>Instructional design principles</li>
								</ul>
								<h4>
									I would be delighted to discuss how my skills and experience
									can align with your organization&apos;s objectives.
								</h4>
							</div>
							<div className='contactDetails'>
								<h4>I can be reached on: </h4>
								<div className='c_info'>
									<div className='c_info_item phoneItem'>
										<img src={Phone} alt='' className='c_icon phoneIcon' /> +65
										90301206
									</div>
									<div className='c_info_item'>
										<img src={Email} alt='' className='c_icon' />
										contactkunaldixit@gmail.com
									</div>
									<div className='c_info_item'>
										<img src={linkedin} alt='' className='c_icon' />

										<a
											rel='noreferrer'
											target='_blank'
											href='https://www.linkedin.com/in/contactkunaldixit'
										>
											LinkedIn Profile
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Footer></Footer> */}
		</>
	);
};

export default Contact;
