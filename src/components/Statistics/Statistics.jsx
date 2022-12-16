import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <span>Good:</span>
        <span>{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Bad:</span>
        <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Total:</span>
        <span>{total}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
