import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import "./authorization.css"

const Authorization = (e) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container_reg">
            <Navbar className="navbar_reg">
                <NavbarBrand>
                    <div className="logo">
                        <div className="imgLogo">
                            <div className="textLogo">KA</div>
                        </div>
                        <div className="titleLogo">KiskaAdventure</div>
                    </div>
                </NavbarBrand>
            </Navbar>
            <div className="enterPanel">
                <p id="enter">Вход</p>
                <form className="EnterInputFields">
                    <input className="inp" placeholder="email" type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input className="inp" placeholder="Пароль" type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <nav>
                        <NavLink typeof="submit" href="/feed" className="buttonSecRegistration">Войти</NavLink>
                    </nav>
                </form>

                <p id="enterLink">Если ещё не зарегистрированны,<br/> то <span id="underline"> <NavLink id="enterLink" href="/registration"> зарегистрируйтесь </NavLink> </span></p>
            </div>
        </div>
    );
};

export default Authorization;