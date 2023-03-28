import React from "react";
import {Link} from "react-router-dom";

const logo = require("../assets/add.svg");

const AddButton = () => {
    return(
        <Link to="note/new" className="floating-button">
            <img src={logo} alt="+"/>
        </Link>
    )
}
export default AddButton;