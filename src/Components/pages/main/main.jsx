import React, {Component} from 'react';
import {NavLink} from "react-bootstrap";
import "./main.css";


function Main() {
    return (
        <div className="container1">
            <div className="navbar1">
                <div>
                    <div className="logo">
                        <div className="imgLogo">
                            <div className="textLogo">KA</div>
                        </div>
                        <div className="titleLogo">KiskaAdventure</div>
                    </div>
                </div>
                <div>
                    <nav className="navigate_main">
                            <NavLink className="nlink" href="/about">О сервисе</NavLink>
                    </nav>
                </div>
                <a href="/authorization" className="buttonEnter">Войти</a>
            </div>
            <div className="mainPageText">
                <div className="bigText">Мур мур,<br/> котики...</div>
                <div className="litText">Сайт знакомств на котором ты сможешь <br/> найти пару за пару кликов.
                    Действуй!
                </div>
                <nav>
                    <NavLink href="/registration" className="buttonRegistration">Зарегестрироваться</NavLink>
                </nav>
            </div>
        </div>
    );
}


export default Main;