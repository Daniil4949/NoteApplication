import React from "react";
import {Link} from "react-router-dom";
import {getContent, getTime, getTitle} from "../../utils";

const ListItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}/`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default ListItem;