import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from '../actions/actionTypes'

const estadoInicial = {
    min: 0,
    max: 0
}

const numerosReducer = (state = estadoInicial, action) => {

    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}

export default numerosReducer