import axios from 'axios';

const url = 'https://kalupi.herokuapp.com/questions';

export const fetchQuestions = () => axios.get(url);
export const createQuestion = (newQuestion) => axios.post(url, newQuestion);
export const updateQuestion = (id,updatedQuestion) => axios.patch(`${url}/${id}`, updatedQuestion);
export const addAnswer = (id,addAns) => axios.patch(`${url}/answer/${id}`, addAns);
export const getQuestion = (id) => axios.get(`${url}/${id}`);

