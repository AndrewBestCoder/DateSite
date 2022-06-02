import React from 'react';
import Header from "../../common/header/header";
import "./profile.css"

const Profile = () => {
    return (
        <div className="containerProfile">
            <Header/>
            <div className="profilePanel">
                <div className="photoInfDesProfile">
                    <div className="photoInfProfile">
                        <div className="photoProfile">
                            <img src={require("../../images/image4.jpg")}/>
                        </div>
                        <div className="infProfile">
                            <p id="textInf">Дамир</p>
                            <p id="textInf">Грозный</p>
                            <p id="holder">Город</p>
                            <p id="textInf">Киев</p>
                            <p id="holder">Возраст</p>
                            <p id="textInf">22</p>
                        </div>
                    </div>
                    <p id="dopInf">Дополнительная информация</p>
                    <div className="descriptionProfile">
                        <p className="desProfile"> Расскажите о себе...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;