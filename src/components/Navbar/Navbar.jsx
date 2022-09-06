import React from 'react'
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.nav_ul}>
          {/* <div className={styles.highlight}> */}
          <li className={styles.nav_list}>
            <a href="#">Welcome</a>
          </li>
          <div className = {styles.nav_hr}/>
          {/* </div>   */}
          <li className={styles.nav_list}>
            <a href="#">My Work</a>
          </li>
          <div className={styles.nav_hr} />
          
          <li className={styles.nav_list}>
            <a href="#">Services</a>
          </li>
          <div className={styles.nav_hr} />
          
          <li className={styles.nav_list}>
            <a href="#">Testimonials</a>
          </li>
          <div className = {styles.nav_hr}/>
            
          <li className={styles.nav_list}>
            <a href="#">Contact</a>
          </li>
          <div className = {styles.nav_hr}/>
        </ul>
        </div> 
    </>
  )
}

export default Navbar