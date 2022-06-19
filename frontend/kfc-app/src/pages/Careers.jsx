import React from 'react';
import styles from './CareersAbout.module.css';

let imgSrc = require('./careers.jpg')

const Careers = () => {
  return (
    <div className={styles.careersDiv}><img src={imgSrc} alt="Careers Page" /></div>
  )
}

export default Careers;