import axios from 'axios'
import { url, getVillagerActionType } from '../constants'

export const getVillagerDataByIdAsync = async(id) => {
    try {
        return await axios.get(`${url}/villagers/${id}`)
            .then(response =>
                dispatchEvent({
                    type: ""
                })).data;
    } catch (error) {
        console.log('getVillagerDataError: ', error);
        return error.then(respone => 
            dispatchEvent({
                type: getVillagerActionType.ERROR
            })
        );
    }
}