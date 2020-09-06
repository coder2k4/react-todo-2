import React, {useReducer} from 'react';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReduser} from "./firebase.reduser";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {

    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)

        if(!res.data) return 
        const notes = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })

        dispatch({
            type: FETCH_NOTES,
            payload: notes
        })

        //console.log('fetchNotes', res.data)
    }

    const addNote = async title => {
        const note = {
            title,
            date: new Date().toJSON()
        }

        const res = await axios.post(`${url}/notes.json`, note)
        const payload = {
            ...note,
            id: res.data.name
        }
        dispatch({
            type: ADD_NOTE,
            payload
        })

        //console.log(res.data)
    }

    const removeNote = async id => {

        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })

        //console.log(res.data)
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader,
            removeNote,
            addNote,
            fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;