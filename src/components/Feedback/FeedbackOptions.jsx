import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, ChanchState }) => (
	<ul className={styles.feedbackList}>
		{options.map(element => (
			<li className={styles.item} key={nanoid(5)}>
				<button className={styles.btn} onClick={ChanchState} id={nanoid(5)}>
					{element}
				</button>
			</li>
		))}
	</ul>
);

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	ChanchState: PropTypes.func,
	FeedbackOptionsId: PropTypes.array,
};

export default FeedbackOptions;
