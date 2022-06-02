import React from 'react';
import "./msgComponent.css"

const MsgComponent = (props) => {
    return (
        <div className="allComponent">
        <div className="msgComponent">
            <div className="photoMsg">
                <img src={props.people.photo} />
            </div>
            <div className="nameMessageTimeMsg">
                <div className="nameTimeMsg">
                    <div className="nameMsg">
                        <p>{props.people.name}</p>
                    </div>
                    <div className="timeMsg">
                        <p>{props.people.time}</p>
                    </div>
                </div>
                <div className="messageMsg">
                    <p>{props.people.message}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MsgComponent;