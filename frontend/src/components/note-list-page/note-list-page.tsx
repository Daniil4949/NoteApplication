import React, {useState, useEffect} from "react";
import ListItem from "../list-item";
import AddButton from "../add-button";
import Notes from "../../services";



const NoteListPage = () => {
    const noteService = new Notes();
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        noteService.getAllNotes()
            .then((response) => setNotes(response))
            .catch((error) => {
                console.log("Error: ", error);
            })
    })
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </div>
            <AddButton/>
        </div>
    )
}

export default NoteListPage