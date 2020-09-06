import React from 'react';

const Notes = ({notes, removeNote}) => {

    const hrmlNotes = notes.map( note => {
        return <li className="list-group-item note" key={note.id}><span className={"note-text"}>{note.title}<small className={"note-date"}>{note.date}</small></span>
            <button type="button" className="btn btn-danger btn-sm" onClick={()=>{removeNote(note.id)}}>&times;</button></li>
    })

    return (
        <div>
            <ul className="list-group">
                {hrmlNotes}
            </ul>
        </div>
    );
};

export default Notes;