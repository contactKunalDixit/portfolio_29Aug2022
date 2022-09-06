import React from 'react';
import styles from "./services.module.css"

const Services = () => {
  return (<>
    <div className={`${styles.services}`}>
      <div className={styles.main_container}>
        <div className={styles.service_desc}>
          <h1>What I do</h1>I provide online presence to companies and individuals looking to reach the right people in the best way possible. Web presence is the first point of contact your audience will have with you, and it`s also the most essential. Without it, you cannot move forward. Let me help you get there.</div>
        <div className={styles.cardsGroup}>
<div className={styles.card}>
      <h4>Web Development</h4>
Full-service web development and design delivered in an easy-to-understand fashion
    </div>
    <div className={styles.card}>
      <h4>Responsive Design</h4>
Built to look and perform beautifully on all types of devices, helping your audience (and search engines) browse efficiently
    </div>
    <div className={styles.card}>
      <h4>UI/UX Design</h4>
Human-centered approach to design giving users an easy-to-navigate and accessible experience
    </div>
        <div className={styles.card}>
      <h4>Business Strategy</h4>
Marketing and advertsing strategy that utilizes online-based technologies to promote your services and grow your brand
    </div>
        </div>
      
    
</div>
</div> 
  </>
  )
}

export default Services