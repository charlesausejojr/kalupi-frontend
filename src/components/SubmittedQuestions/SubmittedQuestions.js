import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import QuestionContainer from '../QuestionsList/QuestionContainer/QuestionContainer';
import useStyles from './styles';
import axios from 'axios';
import { Paper } from '@material-ui/core';

function Questions(props) {
    const [questions,setQuestions] = useState([]);

    const classes = useStyles();
    
    
    useEffect(() => {
        async function fetchQuestion() {
            axios.get('https://kalupi.herokuapp.com/questions/yourQuestions/' + props.match.params.id)
            .then((response) => setQuestions(response.data));
            window.scrollTo(0, 0)   
        }
        fetchQuestion();
    },[]);

    return (
        !questions.length ? 
        <div className={classes.root}>
        <LinearProgress/> 
            {questions.length === 0 &&
            <>
                <Paper id='popout'  className={classes.paper}>
                    <h1>You haven't asked any Questions yet</h1>
                </Paper>
            </>
             }
            
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
