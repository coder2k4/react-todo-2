import React, {useContext, useEffect} from 'react';
import Form from "../Components/Form";
import Notes from "../Components/Notes";
import {FirebaseContext} from "../Context/firebase/firebaseContext";
import Loader from "../Components/Loader";

const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(()=> {
        fetchNotes()
        //console.log('Fetch notes')
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <Notes notes={notes} removeNote={removeNote}/>}
        </div>
    );
};

export default Home;