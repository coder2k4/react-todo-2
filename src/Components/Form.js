import React, {useContext, useState} from 'react';
import {AlertContext} from "../Context/alert/alert.context";
import {FirebaseContext} from "../Context/firebase/firebaseContext";

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            })
                .catch(() => {
                    alert.show('Проблемы с сервером, попробуйте позже', 'danger')
                })
            setValue('');
        }
        else
            alert.show('Введен пустой тектс', 'warning')
    }


    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="textInput">Enter your note</label>
                    <input type="text"
                           className="form-control"
                           id="textInput"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           value={value}
                           onChange={e => setValue(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
};

export default Form;