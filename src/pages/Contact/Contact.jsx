import React, { useState } from 'react';
import styles from './contact.module.css';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
	let [textarea, settextarea] = useState('');

	let handleChange = (e) => {
		settextarea(e.target.value);
	};
	return (
		<>
			<div className={`${styles.contact}`}>
				<div className={styles.mainContainer}>
					<div className={styles.contact_Left}>
						<div className={styles.contentDesc}>
							<h1>{`Let's get started`}</h1>
							<p>
								{`Like what you see? Let's connect and buildsomething great, together!`}
							</p>
						</div>
						<div className={styles.detailForm}>
							<form action='#' className={styles.userForm}>
								<div className={styles.nameNemail}>
									<div className={styles.name}>
										<label htmlFor='userName' className={styles.userName}>
											Name
										</label>
										<input
											type='text'
											id='userName'
											className={styles.userNamebox}
										/>
									</div>
									<div className={styles.email}>
										<label htmlFor='userEmail' className={styles.userEmail}>
											Email
										</label>
										<input
											type='text'
											id='userEmail'
											className={styles.userEmailbox}
										/>
									</div>
								</div>

								<div className={styles.userTextMessageOnly}>
									<label htmlFor='userMessage' className={styles.userMessage}>
										Message
									</label>
									<textarea
										id={styles.userMessage}
										value={textarea}
										onChange={handleChange}
										className={styles.userMessagebox}
									/>
								</div>

								<button className={styles.contactButton} type='submit'>
									SEND
								</button>
							</form>
						</div>
					</div>

					<div className={styles.contact_Right}>
						<h1>Location</h1>
						<p>Bedok Reservoir Road, Singapore</p>
						<h1>Social</h1>
						<div className={styles.twitterIcon}></div>
						<div className={styles.linkedinIcon}></div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Contact;
