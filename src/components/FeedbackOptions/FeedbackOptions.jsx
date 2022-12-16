import { ListForOptions, OptionsButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListForOptions>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionsButton
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option.toUpperCase()}
            </OptionsButton>
          </li>
        );
      })}
    </ListForOptions>
  );
};


  FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};