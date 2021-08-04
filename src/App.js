import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import QuestionsList from "./components/QuestionsList/Questions";
import CreateQuestion from "./components/Form/Form";
import AnswerQuestion from "./components/AnswerForm/AnswerForm";
import SubmittedQuestions from "./components/SubmittedQuestions/SubmittedQuestions";
import SubmittedAnswers from "./components/SubmittedAnswers/SubmittedAnswers";

import Auth from "./components/Auth/Auth";
import { getQuestions } from './actions/questions';

function App() {
  const dispatch = useDispatch();
 // we set the localstorage through the reducer 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
      //dispatching an action
      // the only way to change a state in react
      dispatch(getQuestions());
      setUser(JSON.parse(localStorage.getItem('profile')));
    },[dispatch])

  
  return (
    <Router>
      <div className="app">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={QuestionsList} />
          <Route path="/create" component={CreateQuestion} />
          <Route path="/answer/:id" component={AnswerQuestion} />
          <Route path="/myQuestions/:id" component={SubmittedQuestions} />
          <Route path="/myAnswers/:id" component={SubmittedAnswers} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
