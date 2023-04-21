import { Component } from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
  
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((item, acc) => {
      acc += item;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
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
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title={'Statistics'}>
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )}
          </Section>
        </Container>
      </Container>
    );
  }
}
