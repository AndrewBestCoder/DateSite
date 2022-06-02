import React from 'react';
import Header from "../../common/header/header";
import "./feed.css"
import DataItem from "../../common/dataItem/dataItem";

function Feed() {


    return (
        <div className="containerFeed">

            <div className="head">
                <Header/>
            </div>
            <div className="text">Найдите пару👩‍💖👨</div>
            <div className="feed">
                <div className="items">
                    <DataItem data={{
                        photo: require("../../images/image1.jpg"),
                        nameItem: "Кристина",
                        secName: "Смелая",
                        age: "24",
                        city: "Магнитогорск"
                    }}/>
                    <DataItem data={{
                        photo: require("../../images/image2.jpg"),
                        nameItem: "Настя",
                        secName: "Умная",
                        age: "36",
                        city: "Владивосток"
                    }}/>
                    <DataItem data={{
                        photo: require("../../images/image3.jpg"),
                        nameItem: "Анна",
                        secName: "Петрова",
                        age: "21",
                        city: "Москва"
                    }}/>
                    <DataItem data={{
                        photo: require("../../images/image3.jpg"),
                        nameItem: "Анастасия",
                        secName: "Гарипова",
                        age: "21",
                        city: "Москва"
                    }}/>
                    <DataItem data={{
                        photo: require("../../images/image3.jpg"),
                        nameItem: "Анна",
                        secName: "Сластникова",
                        age: "21",
                        city: "Москва"
                    }}/>
                </div>
            </div>
        </div>
    );
}


export default Feed;