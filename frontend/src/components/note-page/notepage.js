import React, {useState, useEffect} from "react";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";
import Notes from "../../services";
import {useNavigate, useParams} from "react-router";

const notesClient = new Notes();

const NotePage = () => {
    const {id} = useParams();
    const initialNote = notesClient.getDefiniteNote(id);
    const [note, setNote] = useState(initialNote);
    const navigate = useNavigate();

    useEffect(() => {
        notesClient.getDefiniteNote(id)
            .then((response) => setNote(response))
            .catch((error) => console.log(error))
    }, [id])
    const deleteNote = async () => {
        await fetch(`/api/v0/notes/${id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate("/");
    }

    let handleSubmit = () => {
        if (id !== 'new' && note.body === '') {
            notesClient.deleteDefiniteBook(note.id)
                .catch((error) => console.log(error))
        } else if (id === "new" && note.body !== null) {

            notesClient.createNote(note)
                .catch((error) => console.log(error))
        } else if (id !== 'new') {
            notesClient.updateDefiniteBook(id, note)
                .then()
                .catch((error) => console.log(error))
        }
        navigate("/");
    }

    const handleChange = (value) => {
        setNote(note => ({...note, 'body': value}))
        console.log('Handle Change:', note)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => {
                handleChange(e.target.value)
            }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage;