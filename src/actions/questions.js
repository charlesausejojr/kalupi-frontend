import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

/* here, you can use the dispatch with these actions. dispatch(actions) */
export const getQuestions = () => async (dispatch) => {
  try {
    // destructuring since it is an object
    const { data } = await api.fetchQuestions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log("Fetch Error");
    console.log(error);
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("Create Error");
    console.log(error);
  }
};
