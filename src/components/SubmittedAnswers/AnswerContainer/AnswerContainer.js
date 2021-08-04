import React, { useState, useEffect } from 'react'
import "../../QuestionsList/QuestionContainer/QuestionContainer.css"
import { Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AnswerContainer.css';

function AnswerContainer(props) {
    // make this as another component since it is used my other components
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        //const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[]);

    return (
        <div className="questionContainer">
        <Link to={"/answer/"+props.response.questionId} className={classes.link}>
            <Paper id='popout' className="questionContainer__paper">
                <div className="questionContainer__card__top">
                    <div className="questionContainer__card__top__right__answers">
                        <h5 id='font-custom'>Answered at: </h5>
                        <small id='font-custom'>{props.response.createdAt.substring(0,10)}</small>
                    </div>
                </div>
                <div className="questionContainer__card__bottom">   
                    <div className={classes.answer} dangerouslySetInnerHTML={{__html:props.response.answer}}></div>
                </div>
                
            </Paper>
        </Link>  
        </div>
    )
}

export default AnswerContainer
