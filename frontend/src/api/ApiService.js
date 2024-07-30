import axios from './axios';

//POST requests
const createVolunteer = (data) => axios.post('volunteers/', data);
const createContactUsMessage = (data) => axios.post('contactus/', data);

//GET requests
const getArticle = () => axios.get('articles/');


export {createVolunteer, createContactUsMessage, getArticle}