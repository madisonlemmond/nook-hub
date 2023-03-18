import axios from 'axios';


const url = 'https://acnhapi.com/v1a';

export const fetchFishData = async(id) => {
    try {
        const response = await axios.get(`${url}/fish/${id}`);
        console.log(response)
        console.log(response.data.price)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllFishData = async() => {
    try {
        const response = await axios.get(`${url}/fish`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}