import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './components/Feedback/FeedbackOptions.module.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/Feedback';
import Notification from './components/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
onChangeState = (text) => {
this.setState(state => {
const eventName = text.toLowerCase();
for (const key in state) {
  if (key === eventName) {
    state[key] += 0.5;
  }

  }
  return this.state })
  }
  countTotalFeedback = () => { 
  const total = this.state.bad + this.state.neutral + this.state.good;
  return  total;
  }
  countPositiveFeedbackPercentage = () => {
    if (this.state.good < 1) {
      return 0;
    }
    const total = this.countTotalFeedback();
    const totalPercent = this.state.good * 100 / total;
    return Math.round(totalPercent);
  }
  render() {
    const total = this.countTotalFeedback();
    const PositiveFeedback = this.countPositiveFeedbackPercentage();
    const stateKeysMassive = Object.keys(this.state);
    return (
      <div className= {styles.container}>
      <h2 className= {styles.mainTitle}>Please leave feedback</h2>
      <FeedbackOptions
       options={stateKeysMassive} onLeaveFeedback={this.onChangeState}
         />
        <h3 className= {styles.noMainTitle}>Statistics</h3>
        {total > 0 ?(
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={PositiveFeedback}/>
        ) : (
          <Notification message="There is no feedback"/>
        )}
      </div>
    )
  }
  }