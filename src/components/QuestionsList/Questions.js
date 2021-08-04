import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import QuestionContainer from './QuestionContainer/QuestionContainer';
import useStyles from './styles';


function Questions() {
    // accessing the whole global redux store by using useSelector
    const questions = useSelector((state) => state.questions);
    const classes = useStyles();
    
    
    return (
        !questions.length ? 
        <div id='font-custom' className={classes.root}>
            <LinearProgress/>
        </div> : (
            <div>
            {questions.slice(0).reverse().map(question => (
                <QuestionContainer question={question} key={question._id}/>
            ))}
            </div>
        )
        
    )
}

export default Questions
