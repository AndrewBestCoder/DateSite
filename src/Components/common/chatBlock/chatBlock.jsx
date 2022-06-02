import React from 'react';
import "./chatBlock.css"
import ChatHeader from "../chatHeader/chatHeader";
import YourMsgComponent from "../yourMsgComponent/yourMsgComponent";
import MsgComponent from "../msgComponent/msgComponent";

const ChatBlock = () => {
    return (
        <div>
            <ChatHeader people={{photo: require("../../images/image3.jpg"), name: "Ева", secName: "Ульянова"}}/>
            <div className="chat">
                <YourMsgComponent people={{photo: require("../../images/image4.jpg"), name: "Дамир",message:"Привет", time:"20:15"}}/>
                <MsgComponent people={{photo: require("../../images/image3.jpg"), name: "Ева",message:"Привет", time:"20:17"}}/>
                <YourMsgComponent people={{photo: require("../../images/image4.jpg"), name: "Дамир",message:"Как дела?", time:"20:20"}}/>
                <MsgComponent people={{photo: require("../../images/image3.jpg"), name: "Ева",message:"Нормально", time:"20:21"}}/>
            </div>
            <div className="addMes">
                <div className="inpMessage">
                    <input type="text" className="inpInMessage" placeholder="Напишите сообщение..."/>
                </div>
            </div>
        </div>
    );
};

export default ChatBlock;