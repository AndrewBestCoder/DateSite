import React, {Component} from 'react';
import "./header.css"
import {BrowserRouter as Route, Router, Switch, Link} from "react-router-dom";
import Feed from "../../pages/feed/feed";
import About from "../../pages/about/about";
import Messenger from "../../pages/messenger/messenger";
import {NavLink} from "react-bootstrap";


function Header() {
    return (
        <>
            <div className="navbar">
                <div>
                    <div className="logo">
                        <div className="imgLogo">
                            <div className="textLogo">KA</div>
                        </div>
                        <div className="titleLogo">KiskaAdventure</div>
                    </div>
                </div>
                <div>
                    <nav>
                        <NavLink className="nlink" href="/feed">Лента</NavLink>
                        <NavLink className="nlink" href="/about">О сервисе</NavLink>
                        <NavLink className="nlink" href="/messenger">Мессенджер</NavLink>
                    </nav>
                </div>
                <div>
                    <nav className="profile">
                        <NavLink href="/profile" className="profileHead">
                            <div className="photo">
                            </div>
                            <div className="textProfile">Профиль</div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
}


export default Header;