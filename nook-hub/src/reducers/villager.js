import { getVillagerActionType } from "../constants"

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

export function villagersReducer (state = intitialState, action) {
    switch(action.type) {
        
        case getVillagerActionType.OPERATION: return getVillagerLoading(state, action.response)
        case getVillagerActionType.SUCCESS: return getVillagerResponse(state, action.response)
        case getVillagerActionType.ERROR: return getVillagerError(state, action.response)
    
        default: return state;
    }
}

function getVillagerLoading(state, response) {
    return [
        ...initialState,
        {
            loading: true
        }
    ]
}

function getVillagerResponse(state, response) {
    return [
        ...state,
        {
            id: response.id,
            filename: response.filename,
            name: response.name,
            personality: response.personality,
            birthdayString: response.birthdaystring,
            birthday: response.birthday,
            species: response.species,
            gender: response.gender,
            catchPhrase: response.catchPhrase,
            icon_uri: response.icon_uri,
            image_uri: response.image_uri,
            loading: false
        }
    ]
}

function getVillagerError(state, response) {
    return [
        ...state,
        {
            error: response.error,
            loading: false
        }
    ]
}