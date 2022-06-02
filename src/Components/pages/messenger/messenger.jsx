import React from 'react';
import Header from "../../common/header/header";
import "./messenger.css"
import ChatBlock from "../../common/chatBlock/chatBlock";
import MessageBlock from "../../common/messageBlock/messageBlock";

const Messenger = () => {
    return (
        <div className="containerMessenger">
            <Header/>
            <div className="messengerPanel">
                <div className="messageBlocks">
                    <MessageBlock peopleMes={{name: "Кристина", secName: "Емельянова", date: "25", month: "Дек", lastMessage: "Привет", photo: require("../../images/image2.jpg")}}/>
                    <MessageBlock peopleMes={{name: "Наталья", secName: "Егорова", date: "1", month: "Мар", lastMessage: "Как дела?", photo: require("../../images/image2.jpg")}}/>
                    <MessageBlock peopleMes={{name: "Анна", secName: "Путина", date: "15", month: "Июн", lastMessage: "Привет", photo: require("../../images/image2.jpg")}}/>
                    <MessageBlock peopleMes={{name: "Вероника", secName: "Плескачева", date: "23", month: "Апр", lastMessage: "Привет", photo: require("../../images/image2.jpg")}}/>
                    <MessageBlock peopleMes={{name: "Анастасия", secName: "Пудовкина", date: "16", month: "Сен", lastMessage: "Привет", photo: require("../../images/image2.jpg")}}/>
                </div>
                <div className="chatPanelMessenger">
                    <ChatBlock/>
                </div>
            </div>

        </div>
    );
}


export default Messenger;