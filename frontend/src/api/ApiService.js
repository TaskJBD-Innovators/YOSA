import axios from './axios';

//POST requests
const createVolunteer = (data) => axios.post('volunteers/', data);
const createContactUsMesasge = (data) => axios.post('contactus/', data);

//GET requests
const getArticle = () => axios.get('articles/');
const checkEmailExists = async (email) => {
    try {
        const response = await axios.get(`/api/check-email/?email=${email}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {createVolunteer, createContactUsMesasge, getArticle, checkEmailExists}