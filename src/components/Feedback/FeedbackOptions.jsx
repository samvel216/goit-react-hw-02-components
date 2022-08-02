import React, { Component } from "react";
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({options, ChanchState, FeedbackOptionsId}) => (
        <ul className={styles.feedbackList}>
         { options.map(element => (
          <li className= {styles.item}>
            <button className= {styles.btn}  onClick = {ChanchState} id = {FeedbackOptionsId[options.indexOf(element)]}>{element}</button>
          </li>
         ))}
    </ul>

);
export default FeedbackOptions;