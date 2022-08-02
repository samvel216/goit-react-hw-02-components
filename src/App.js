import React, { Component } from "react";
import styles from './components/Feedback/FeedbackOptions.module.css';
import Statistics from "components/Statistics";
import FeedbackOptions from "components/Feedback";
import Notification from './components/Notification';
import { nanoid } from 'nanoid';
let idArray = [nanoid(5),nanoid(5),nanoid(5)];
export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      ChanchState = (event) => {
        event.preventDefault();
       if (event.currentTarget.id === idArray[0]) {
        this.setState((state) => ({
            good: state.good + 1,
          }));
       }
       if (event.currentTarget.id === idArray[1]) {
        this.setState((state) => ({
            neutral: state.neutral + 1,
          }));
       }
       if (event.currentTarget.id === idArray[2]) {
        this.setState((state) => ({
            bad: state.bad + 1,
          }));
       }
      }
      positiveFeedBack = (total) => {
      const onePercentTotal =   100 / total;
      const positivePercentFeedback = Math.floor(this.state.good * onePercentTotal);
      return positivePercentFeedback;
      }
      render() {
       const FeedbackMassive = Object.keys(this.state);
       const total = this.state.good + this.state.neutral + this.state.bad;
       const positiveFeedBack = this.positiveFeedBack(total);
        return (
            <div>
           <h2 className={styles.mainTitle}>Please Leave Feedback</h2>
            <FeedbackOptions options = {FeedbackMassive} ChanchState = {this.ChanchState} FeedbackOptionsId = {idArray} />
            <h3 className={styles.mainTitle}>Statistics</h3>
            {total > 0  ? (<Statistics good = {this.state.good} neutral = {this.state.neutral} bad = {this.state.bad} total = {total} positiveFeedBack = {positiveFeedBack}/>)
            : (<Notification message="There is no feedback"/>)}
            </div>

        )
      }
        

      
    }