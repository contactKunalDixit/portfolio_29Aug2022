/* eslint-disable react/prop-types */
import React from 'react';
import styles from "./services.module.css";



const Services = (props) => {
  return (<>
    <div className={`${styles.services}`}>
      <div className={styles.main_container}>
        <div className={styles.service_desc}>
          <h1 className={styles.headTitle}>What I do</h1>
          <p className = {styles.paraDesc}>I provide online presence to companies and individuals looking to reach the right people in the best way possible. Web presence is the first point of contact your audience will have with you, and it`s also the most essential. Without it, you cannot move forward. Let me help you get there.
          </p> </div>
        
        <div className={styles.cardsGroup}>
          {
            props.servicesProps.map(
              (item) =>
                <div className={styles.card} key={ item.key}>
                  <div className={styles.cardLeft}>{props.servicesProps.icon}
                  </div>
                  <div className={styles.cardRight}>
                    <h4>{item.title}</h4>
                    <p> {item.desc}</p>
                  </div>
                </div>
            )
            } 
        </div>
</div>
</div> 
  </>
  )
}

export default Services