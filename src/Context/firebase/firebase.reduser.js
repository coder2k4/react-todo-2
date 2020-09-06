import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";

const initialState = {
    notes: [],
    loading: false
}


const handler = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, action) => ({
        ...state,
        notes: [...state.notes, action.payload]
    }),
    [FETCH_NOTES]: (state, action) => ({...state, notes: action.payload, loading: false}),
    [REMOVE_NOTE]: (state, action) => ({
        ...state,
        notes: state.notes.filter(item => item.id !== action.payload)
    }),
    DEFAULT: state => state
}


export const firebaseReduser = (state = initialState, action) => {
    const handle = handler[action.type] || handler.DEFAULT
    return handle(state, action)
}