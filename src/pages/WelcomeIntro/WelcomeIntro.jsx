import React from 'react';
import styles from './welcomeIntro.module.css';
const WelcomeIntro = () => {
	return (
    <div className={`${styles.welcomeIntro}`}>
      <div className={styles.main_container}>
      <h1 className = {styles.headTitle}>
          Hi, I’m Kunal,<br />
          your next Software Developer.
      </h1>
			<h2 className = {styles.subTitle}>
				I build Full Stack websites and web applications using HTML, CSS, JavaScript, NodeJS and PHP
      </h2>
      <button type="button" className={styles.Navbutton}>SEE WHAT I CAN DO</button>  
      </div>
		</div>
	);
};

export default WelcomeIntro;
