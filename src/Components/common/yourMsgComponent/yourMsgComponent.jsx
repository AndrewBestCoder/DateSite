import React from 'react';
import "./yourMsgComponent.css"

const YourMsgComponent = (props) => {
    return (
        <div className="yourAllComponent">
        <div className="yourMsgComponent">
            <div className="yourNameMessageTimeMsg">
                <div className="yourNameTimeMsg">
                    <div className="yourTimeMsg">
                        <p>{props.people.time}</p>
                    </div>
                    <div className="yourNameMsg">
                        <p>{props.people.name}</p>
                    </div>
                </div>
                <div className="yourMessageMsg">
                    <p>{props.people.message}</p>
                </div>
            </div>
            <div className="yourPhotoMsg">
                <img src={props.people.photo}/>
            </div>
        </div>
        </div>
    );
};

export default YourMsgComponent;