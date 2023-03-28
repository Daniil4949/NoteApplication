import React, {useEffect, useState} from "react";
import Notes from "../../services";
import {useNavigate, useParams} from "react-router-dom";
import {ArrowLeft} from "../assets";


const notesClient = new Notes();
type NoteType = {
    id: number,
    body: string,
    updated: Date,
    created: Date
}


const NotePage = () => {
    const obj = useParams();
    const id = obj.id;
    const initialState: any   = notesClient.getDefiniteNote(Number(id));
    const initialValue: NoteType = initialState;
    const [note, setNote] = useState(initialValue);
    const navigate = useNavigate();
    useEffect(() => {
        notesClient.getDefiniteNote(Number(id))
            .then((response) => setNote(response))
            .catch((error) => console.log(error))
    }, [id])
    const deleteNote = async () => {
        const result = await fetch(`/api/v0/notes/${id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        console.log(result);
        navigate("/");
    }
    let handleSubmit = () => {
        if (id !== 'new' && note.body === "") {
            notesClient.deleteDefiniteBook(note.id)
                .catch((error) => console.log(error))

        } else if (id === 'new' && note.body !== null) {
            notesClient.createNote(note)
                .catch((error) => console.log(error))
        } else if (id !== 'new') {
            notesClient.updateDefiniteBook(note.id, note)
                .then((response) => setNote(response))
                .catch((error) => console.log(error))
        }
        navigate("/");

    }
    const handleChange = (value: string) => {
        setNote(note => ({...note, "body": value}))
        console.log("Handle change: ", note)
    }
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <img src={ArrowLeft} alt="Back" onClick={handleSubmit}/>

                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )
                }
            </div>
            <textarea onChange={(e)=>{handleChange(e.target.value)}}
            value={note?.body}></textarea>
        </div>
    )
}

export default NotePage;
