import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';
import Section from './Section/Section';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const ollFeedback = good + neutral + bad;
    return ollFeedback;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const result = this.countTotalFeedback();
    const renderOptions = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
					<FeedbackOptions options={renderOptions} onLeaveFeedback={this.leaveFeedback}/>
				</Section>

					<Notification message="No feedback given" />
			
					<Section title={"Statistics"}>
						<Statistic
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={result}
							positivePercentage={this.countPositivePercentage()}
						/>
					</Section>
      </div>
    );
  }
}