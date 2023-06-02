import React from "react";
import PropTypes from 'prop-types';
import { Button, List, Item} from './styled'

export const FeedbackOptions =({ onLeaveFeedback, options }) => {
        return (
            <List onClick={onLeaveFeedback}>
                {options.map((option, ind) => (
                <Item key={ind} >
                    <Button type="button" name={option}>{option}</Button>
                </Item>)
                )}
                
                    {/* <Item key = {1}>
                        <Button type="button" name={'good'}>good</Button>
                    </Item>
                    <Item key = {2}>
                        <Button type="button" name={'neutral'}>neutral</Button>
                    </Item>

                    <Item key = {3}>
                        <Button type="button" name={'bad'}>bad</Button>
                    </Item> */}

                </List>
            )
    }

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};