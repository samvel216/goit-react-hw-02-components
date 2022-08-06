import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedBack }) => (
	<ul className={styles.statisticsList}>
		<li>
			<p>
				Good: <span>{good}</span>
			</p>
		</li>
		<li>
			<p>
				Neutral: <span>{neutral}</span>
			</p>
		</li>
		<li>
			<p>
				Bad: <span>{bad}</span>
			</p>
		</li>
		<li>
			<p>
				Total: <span>{total}</span>
			</p>
		</li>
		<li>
			<p>
				Positive feedBack: <span>{positiveFeedBack}%</span>
			</p>
		</li>
	</ul>
);

Statistics.propTypes = {
	good: PropTypes.number,
	neutral: PropTypes.number,
	bad: PropTypes.number,
	total: PropTypes.number,
	positiveFeedBack: PropTypes.number,
};

export default Statistics;
