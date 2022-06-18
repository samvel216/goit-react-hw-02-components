import React, { Component } from "react"; 
import styles from './Notification.module.css';
const Notification = ({message}) => (
  <h3 className={styles.notification}>{message}</h3>
)
export default Notification;