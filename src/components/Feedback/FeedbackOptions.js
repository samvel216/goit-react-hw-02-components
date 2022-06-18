import React, { Component } from "react"; 
import styles from './FeedbackOptions.module.css';
const lalka = ({options,onLeaveFeedback}) => (
    <ul className= {styles.btnList}>
      {options.map(element => (
   <li  key={element} className= {styles.itemB}>
   <button className= {styles.button} onClick={() => onLeaveFeedback(element)}>{element}</button>
 </li>
))}
        </ul>
)
export default lalka;