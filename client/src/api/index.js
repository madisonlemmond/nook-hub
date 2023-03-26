import axios from 'axios';
import { url } from '../constants'

export const fetchFishData = async (id) => {
    try {
        // const response = await axios.get(`${url}/fish/${id}`);
        const response = await fetch(`/api/fish/id/${id}`);
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllFishData = async () => {
    try {
        const response = await fetch(`/api/fish/all`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}