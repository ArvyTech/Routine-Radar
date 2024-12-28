import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const getTechnologies = async () => {
    const response = await axios.get(`${BASE_URL}/technologies/`);
    return response.data;
};

export const getActivities = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}/activities/?page=${page}`);
    return response.data;
};

export const createActivity = async (activityData) => {
    try{
        const response = await axios.post(`${BASE_URL}/activities/`, activityData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch(error) {
        console.error('Error creating activity:', error);
        throw error;
    }
};