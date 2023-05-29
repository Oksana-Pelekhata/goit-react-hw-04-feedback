
import React from "react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { FeedbackOptions } from './FeedbackOptions'
import { Section } from './Section'
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
      const handleFeedbackBtn = (e) => {
        const {name} = e.target
        if (name === 'good') setGood(good + 1)
        if (name === 'neutral') setNeutral(neutral + 1)
        else if (name === 'bad') setBad(bad + 1)
    }

    const countTotalFeedback = () => {
      
     let totalFeedback = good + neutral + bad
      return totalFeedback
    }
  
   const countPositiveFeedbackPercentage = () => {
       const positiveFeedbackPercentage = Math.round(good / countTotalFeedback() * 100)
return positiveFeedbackPercentage
    }
  
 
     
      return (
    <ThemeProvider theme = {theme}>
  <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={handleFeedbackBtn} />.
          </Section>
          {countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> :
            <Section title="Statistics">
              <Statistics good={good} neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
            </Section>}
    </ThemeProvider>
  )
  }
