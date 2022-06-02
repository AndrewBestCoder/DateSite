import React from 'react';
import Header from "../../../common/header/header";
import {NavLink} from "react-bootstrap";
import "./secMessenger.css"

const SecMessenger = () => {
    return (
        <div className="containerSecMessenger">
            <Header/>
            <div className="chatPanel">
                <div className="chatHeader">
                    <NavLink className="backToMessenger" href="/messenger">
                        Назад
                    </NavLink>
                    <p>Дарья капецкнш</p>
                    <div className="photoPeople">
                        <img src={require("../../../images/image3.jpg")}/>
                    </div>
                </div>
                <div className="chat"></div>
                <div className="addMes"></div>
            </div>
        </div>
    );
};

export default SecMessenger;