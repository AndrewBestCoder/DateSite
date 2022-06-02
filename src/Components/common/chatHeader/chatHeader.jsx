import React from 'react';
import {NavLink} from "react-bootstrap";
import {MdArrowBackIosNew} from "react-icons/md";
import "./chatHeader.css";

const ChatHeader = (props) => {
    return (
        <div className="chatHeader">
            <p id="headerName">{props.people.name} {props.people.secName}</p>
            <div className="photoPeople">
                <img src={props.people.photo}/>
            </div>
        </div>
    );
};

export default ChatHeader;