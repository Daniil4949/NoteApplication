import React from "react";
import {Link} from "react-router-dom";
import {getTitle, getTime} from "../../utils";


interface Props {
    note:
        {
            id: number,
            body: string,
            updated: Date,
            created: Date
        }
}

const ListItem = ({note}: Props) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span></p>
            </div>
        </Link>
    )
}


export default ListItem;