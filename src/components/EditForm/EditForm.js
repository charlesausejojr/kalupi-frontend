import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import selections from '../../constants/categories';
import { useLocation, useHistory } from 'react-router-dom';
import ReactQuill from "react-quill";
import '../../../node_modules/react-quill/dist/quill.snow.css';
import modules from '../../constants/quillConfig';
import './EditForm.css';
import axios from 'axios';
import useStyles from './styles';
import { createQuestion } from '../../actions/questions';

const EditForm = (props) => {
  const [questionData, setQuestionData] = useState({ username: '', title: '', description: '', category: '', picture: '', googleId: ''});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [description, setDescriptionData] = useState('');

  const history = useHistory();

  //to have access to the change in user
  const location = useLocation();

  //const question = useSelector((state) => (currentId ? state.questions.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
    
  const descHandler = (e) => {
    console.log(e);
    // in order to display in the rich text editor
    setDescriptionData(e);
    // setting the description
    setQuestionData({ ...questionData, description: e});
  }

  useEffect(() => {
    async function fetchQuestion() {
        axios.get('http://localhost:3000/questions/' + props.match.params.id)
        .then((response) => {
          setQuestionData(response.data)
          setDescriptionData(response.data.description)
        });
        
    }
    window.scrollTo(0, 0)  
    setUser(JSON.parse(localStorage.getItem('profile')));
    //setQuestionData({ username: user?.result.givenName, picture: user?.result.imageUrl, googleId: user?.result.googleId});
    fetchQuestion();
    console.log(questionData)
  },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(questionData);
    await axios.patch('http://localhost:3000/questions/' + props.match.params.id)
    history.push('/');
  };

  return (
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    <Paper id='popout' variant="outlined" className="form__paper">
      <h3 id='font-custom'>Edit Question:</h3>
        <TextField inputProps={{ maxLength: 40 }} name="title" id="outlined-basic" label="Title" fullWidth value={questionData.title} onChange={(e) => setQuestionData({ ...questionData, title: e.target.value })} />
        <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
            <Select
            name="category"
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={questionData.category}
            fullWidth
            onChange={(e) => setQuestionData({ ...questionData, category: e.target.value })}
            className={classes.selectEmpty}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {selections.map((selection) => (
                <MenuItem value={selection}>{selection}</MenuItem>
            ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
      </FormControl>
      </Paper>
      <Paper id='popout' variant="outlined" className={classes.bottomPaper}>
      <h5 id='font-custom'>Description:</h5>
      <ReactQuill
          className={classes.editor}
          theme='snow'
          value={description} 
          onChange={descHandler}
          modules={modules}
        />
        <div className={classes.buttons}>
          <Button id='font-custom' onClick={handleSubmit} className={classes.submit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
        </div>
      </Paper>
      </form>
    
  );
};

export default EditForm;
