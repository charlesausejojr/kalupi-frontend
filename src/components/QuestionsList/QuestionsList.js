import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import QuestionContainer from "./QuestionContainer/QuestionContainer";


export default class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {questions: []};
  }

  
  componentDidMount() {
    axios.get('https://kalupi.herokuapp.com/questions/')
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  questionList() {
    return this.state.questions.slice(0).reverse().map(currentquestion => {
      return <QuestionContainer question={currentquestion} key={currentquestion._id}/>;
    })
  }

  render() {
    return (
      <div id='font-custom'>
 
        {this.questionList()}
        
      </div>
    )
  }
}