import React, { useEffect, useState } from 'react'
import { Avatar, Button, Paper } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import './AnswerForm.css';
import ReactQuill from "react-quill";
import '../../../node_modules/react-quill/dist/quill.snow.css';
import modules from '../../constants/quillConfig';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';


function AnswerForm(props) {
    const classes = useStyles();
    const [question, setQuestion] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [answer, setAnswer] = useState('');
    const [answerInfo, setAnswerInfo] = useState({ answer: '', questionId: '', picture: '', googleId: '', name: '' })
    const [answerList, setAnswerList] = useState([]);

    const history = useHistory();
    const answerHandler = (e) => {
        setAnswer(e);
        setAnswerInfo({ ...answerInfo, questionId: question?._id, answer: e })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answerInfo)
        axios.post('https://kalupi.herokuapp.com/answers/' , answerInfo);
        history.push('/');
      };

    useEffect(() => {
        async function fetchData() {
            axios.get('https://kalupi.herokuapp.com/answers/' + props.match.params.id)
            .then((response) => setAnswerList(response.data));

            axios.get('https://kalupi.herokuapp.com/questions/' + props.match.params.id)
            .then((response) => (
                setQuestion(response.data)
            
            ));

            window.scrollTo(0, 0);
            setUser(JSON.parse(localStorage.getItem('profile')));
            setAnswerInfo({ questionId: question?._id , picture: user?.result.imageUrl , googleId: user?.result.googleId , name: user?.result.name})
        }
        fetchData();
        console.log(answerInfo)
    },[]);

    return (
        <div>
            <Paper id='popout' className="answerForm__paper">
            <div id='font-custom' className={classes.top}>
                <div className={classes.right}>
                    <Avatar src={question.picture}></Avatar>
                    <h6 className={classes.creator}>Creator:</h6>
                    <h5 className={classes.username}>{question.username}</h5>
                </div>             
            </div>
                <h3 id='font-custom'>{question.title}</h3>
                <h6 id='font-custom'>{question.category}</h6>
                <div className={classes.description} dangerouslySetInnerHTML={{__html: question.description}}></div>


            <Accordion elevation={3}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <h5 id='font-custom'>View Answers</h5>
                </AccordionSummary>
                
                    {answerList.length === 0? 
                    <center><h2>No Answers yet!</h2></center>
                    : answerList?.map((item) => (
                        <>
                        <div className={classes.container}>
                        <Avatar src={item.picture}></Avatar>
                        <div className={classes.info}>
                            <h5>{item.name}</h5>
                            <small>{item.createdAt.substring(0,10)}</small>
                        </div>
                        
                        </div>
                        <div className={classes.answer} dangerouslySetInnerHTML={{__html: item.answer}}></div>
                        </>
                    ))}
            </Accordion>
            
            </Paper>
            {user.result.googleId !== question.googleId &&  
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>    
            <Paper id='popout' className='bottomPaper'>
                <h4 id='font-custom'>Response:</h4>
                    <ReactQuill
                    className={classes.editor}
                    theme='snow'
                    value={answer}
                    onChange={answerHandler}
                    modules={modules}
                    />
                    <Button  id='font-custom' className='submit' onClick={handleSubmit}>Submit</Button>
            </Paper> 
            </form>}
                
        </div>
    )
}

export default AnswerForm
