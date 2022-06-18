import React, { Component } from "react"; 
import styles from './Statistics.module.css';
const Statistics = ({good,neutral,bad,total,positivePercentage}) => (  
  <ul className= {styles.textList}>  
    <li className= {styles.itemT}>
      <p className= {styles.text}>Good: {good}</p>
    </li>
    <li className= {styles.itemT}>
    <p className= {styles.text}>Neutral: {neutral}</p>
  </li>
  <li className= {styles.itemT}>
    <p className= {styles.text}>Bad: {bad}</p>
  </li>
  <li className= {styles.itemT}>
  <p className= {styles.text}>Total: {total}</p>
  </li>
  <li className= {styles.itemT}>
  <p className= {styles.text}>Positive feedback: {positivePercentage}{'%'}</p>
  </li>    
  </ul>
);
export default Statistics;