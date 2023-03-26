import { getFishActionType } from '../constants'

const initialError = {
    statusCode: 0,
    message: '',
}
const initialName = {
    nameUSen: '',
    nameEUen: '',
    nameEUde: '',
    nameEUes: '',
    nameUSes: '',
    nameEUfr: '',
    nameUSfr: '',
    nameEUit: '',
    nameEUnl: '',
    nameCNzh: '',
    nameTWzh: '',
    nameJPja: '',
    nameKRko: '',
    nameEUru: ''
}

const initialAvailability = {
    monthSouthern: '',
    time: '',
    monthNorthern: '',
    isAllDay: true,
    isAllYear: false,
    location: '',
    rarity: '',
    monthArrayNorthern: [],
    monthArraySouthern: [],
    timeArray: []
}

const initialState = {
    id: 0,
    filename: '',
    name: initialName,
    availability: initialAvailability,
    shadow: '',
    price: '',
    priceCj: '',
    catchphrase: '',
    museumPhrase: '',
    image_uri: '',
    icon_uri: '',
    loading: false,
    error: initialError
}

export default function fishReducer(state = initialState, action) {
    switch(action.type) {
        
        case getFishActionType.OPERATION: return getFishLoading(state, action.response)
        case getFishActionType.SUCCESS: return getFishResponse(state, action.response)
        case getFishActionType.ERROR: return getFishError(state, action.response)
    
        default: return state;
    }
}

function getFishLoading(state, response) {
    return [
        ...initialState,
        {
            loading: true
        }
    ]
}

function getFishResponse(state, response) {
    return [
        ...state,
        {
            id: response.id,
            filename: response.filename,
            name: response.name,
            availability: response.availability,
            shadow: response.shadow,
            price: response.price,
            priceCj: response.priceCj,
            catchphrase: response.catchphrase,
            museumPhrase: response.museumPhrase,
            image_uri: response.image_uri,
            icon_uri: response.icon_uri,
            loading: false,
        }
    ]
}

function getFishError(state, response) {
    return [
        ...state,
        {
            error: response.error,
            loading: false
        }
    ]
}