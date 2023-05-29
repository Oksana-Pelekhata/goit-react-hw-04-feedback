import React from "react";
import PropTypes from 'prop-types';
import { Button, List, Item} from './styled'

export const FeedbackOptions =({ onLeaveFeedback }) => {
        return (
                <List onClick={onLeaveFeedback}>
                    <Item key = {1}>
                        <Button type="button" name={'good'}>good</Button>
                    </Item>
                    <Item key = {2}>
                        <Button type="button" name={'neutral'}>neutral</Button>
                    </Item>

                    <Item key = {3}>
                        <Button type="button" name={'bad'}>bad</Button>
                    </Item>

                </List>
            )
    }

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};