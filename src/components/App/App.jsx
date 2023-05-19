
import { useState } from "react";
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = ( ) => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const optionsArray = ['good', 'neutral', 'bad'];

const onLeaveFeedback = option => {
  switch (option) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;

    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;

    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;

    default:
      throw new Error("Please select Good, Neutral or Bad");
      // return;
  }
};

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  return Math.round(good / countTotalFeedback() * 100) || 0;
};



return (
      <Container as="main">
        <Container
          as="div"
          maxWidth={1250}
          pl={15}
          pr={15}
          ml={'auto'}
          mr={'auto'}
        >
          <Section title={'Please leave your feedback'}>
            <FeedbackOptions
              options={optionsArray}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          <Section title={'Statistics'}>
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message={'There is no feedback at the moment.'} />
            )}
          </Section>
        </Container>
      </Container>
    );
}








