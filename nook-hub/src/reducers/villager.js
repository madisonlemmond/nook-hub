import { getVillagerDataByIdAsync } from "../services/villagerService"
import { actionTypes } from "../constants"

const initialState = {
    id: 0,
    filename: '',
    name: '',
    personality: '',
    birthdaystring: '',
    birthday: '',
    species: '',
    gender: '',
    catchphrase: '',
    icon_uri: '',
    image_uri: '',
    loading: false,
    error: initialError
}

const initialError = {
    statusCode: 0,
    message: '',
}

export default function villagersReducer(state = intitialState, action) => {
    switch(action.type) {
        case actionTypes.OPERATION: 
            return {
                ...state,
                loading: true
            }

        case actionTypes.COMPLETE:
            return {
                ...state,
                getVillagerResponse(state, action.response)
            }

        case actionTypes.ERROR:
            return {
                ...state,
                getVillagerError(state, action)
            }

        default: 
            return state;
    }
}

static function getVillagerResponse(state, response) => {
    ...state,
    id: 0,
    filename: '',
    name: '',
    personality: '',
    birthdaystring: '',
    birthday: '',
    species: '',
    gender: '',
    catchphrase: '',
    icon_uri: '',
    image_uri: '',
    loading: false
};