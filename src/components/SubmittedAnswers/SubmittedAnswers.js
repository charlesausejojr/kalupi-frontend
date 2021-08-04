import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import QuestionContainer from '../QuestionsList/QuestionContainer/QuestionContainer';
import useStyles from './styles';
import axios from 'axios';
import AnswerContainer from './AnswerContainer/AnswerContainer';
import { Paper } from '@material-ui/core';

function Answers(props) {
    const [answers,setAnswers] = useState([]);

    const classes = useStyles();
    
    
    useEffect(() => {
        async function fetchAnswers() {
            axios.get('https://kalupi.herokuapp.com/answers/yourAnswers/' + props.match.params.id)
            .then((response) => setAnswers(response.data));
            console.log(answers)
            window.scrollTo(0, 0)   
        }
        
        fetchAnswers();
    },[]);

    return (
        !answers.length ? 
        <div className={classes.root}>
        <LinearProgress/> 
            {answers.length === 0 &&
            <>
                <Paper id='popout' className={classes.paper}>
                    <h1>You haven't answered any Questions yet</h1>
                </Paper>
            </>
             }
        </div> : (
            <div>
            {answers.slice(0).reverse().map(answer => (
                <AnswerContainer response={answer} key={answer._id}/>
            ))}
            
            </div>
        )
        
    )
}

export default Answers
