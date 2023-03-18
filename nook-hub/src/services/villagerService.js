import axios from 'axios'
import url from '../constants'

export const getVillagerDataByIdAsync = async(id) => {
    try {
        return await axios.get(`${url}/villagers/${id}`)
            .then(response =>
                dispatchEvent({
                    type: action
                }) ).data;
    } catch (error) {
        console.log('getVillagerDataError: ', error);
        return error;
    }
}