import React, {Component} from 'react';
import "./messageBlock.css"
import ChatBlock from "../chatBlock/chatBlock";

const MessageBlock = (props) => {
    return (
        <div>
            <div className="message">
                <div className="photoMessage">
                    <img src={props.peopleMes.photo}/>
                </div>
                <div className="nameTextMessage">
                    <div className="nameMes">
                        <p id="nameMessage">{props.peopleMes.name} {props.peopleMes.secName}</p>
                        <div className="date">
                            <p>{props.peopleMes.date} {props.peopleMes.month}</p>
                        </div>
                    </div>
                    <div className="textMes">
                        <div className="photoMes">
                            <img className="photoMes" src={props.peopleMes.photo}/>
                        </div>
                        <p id="pMes">{props.peopleMes.lastMessage}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MessageBlock;