import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
const FeedbackOptions = ({options, ChanchState, FeedbackOptionsId}) => (
        <ul className={styles.feedbackList}>
         { options.map(element => (
          <li className= {styles.item} key={nanoid(5)}>
            <button className= {styles.btn} onClick = {ChanchState} id = {FeedbackOptionsId[options.indexOf(element)]}>{element}</button>
          </li>
         ))}
    </ul>

);
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  ChanchState: PropTypes.func,
  FeedbackOptionsId: PropTypes.array
}
export default FeedbackOptions;