import React, { useState, useEffect } from 'react'
import "./QuestionContainer.css"
import { Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function QuestionContainer(props) {
    // make this as another component since it is used my other components
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[]);

    return (
        <div id='font-custom' className="questionContainer">
            <Paper id='popout' className="questionContainer__paper">
                <div className="questionContainer__card__top">
                    <div className="questionContainer__card__top__left">
                        <Avatar className={classes.large} src={props.question.picture}></Avatar>
                        <h6>{props.question.username}</h6>
                    </div>
                    <div className="questionContainer__card__top__right">
                        <h2>{props.question.title.length > 20? props.question.title.substring(0,20) + "..." : props.question.title}</h2>
                        <small>{props.question.createdAt.substring(0,10)}</small>
                    </div>
                    {user && 
                    <Link to={"/answer/"+props.question._id} className={classes.link}>
                        <Button id='font-custom' className={classes.button} variant="contained" color="primary">
                            View
                        </Button>
                    </Link>
                    }
                    
                </div>
                <div className="questionContainer__card__bottom">   
                    <h5 className="category">{props.question.category}</h5>
                </div>
            </Paper>
            
        </div>
    )
}

export default QuestionContainer
