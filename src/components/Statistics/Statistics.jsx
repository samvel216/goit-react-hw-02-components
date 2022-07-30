import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './Statistics.module.css';
const Statistics = ({good,neutral,bad,total,positiveFeedBack}) => (
        <ul className={styles.statisticsList}>
       <li>
        <p>Good: <span>{good}</span></p>
       </li>
       <li>
        <p>Neutral: <span>{neutral}</span></p>
       </li>
       <li>
        <p>Bad: <span>{bad}</span></p>
       </li>
       <li>
        <p>Total: <span>{total}</span></p>
       </li>
       <li>
        <p>Positive feedBack: <span>{positiveFeedBack}%</span></p>
       </li>
    </ul>

);
export default Statistics;