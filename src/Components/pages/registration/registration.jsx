import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import "./registration.css"




function Registration(){
    const [name, setName] = useState('');
    const [secName, setSecName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
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
            <div className="regPanel">
                <p id="reg">Регистрация</p>
                <form className="inputFields">
                    <input className="inp" placeholder="email" type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input className="inp" placeholder="Пароль" type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <input className="inp" placeholder="Повторите пароль" type="password" value={repPassword}
                           onChange={(e) => setRepPassword(e.target.value)}/>
                    <input className="inp" placeholder="Имя" type="text" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <input className="inp" placeholder="Фамилия" type="text" value={secName}
                           onChange={(e) => setSecName(e.target.value)}/>
                    <input className="inp" placeholder="дд/мм/гггг" type="date" value={dateBirth}
                           onChange={(e) => setDateBirth(e.target.value)} required/>
                    <input className="inp" placeholder="Город" type="text" value={city}
                           onChange={(e) => setCity(e.target.value)}/>

                    <div className="checkbox">
                        <label htmlFor="gender">Пол</label>
                        <div className="radio">
                        <input className="check" id="gender" type="radio" name="gender" checked />Мужской
                        </div>
                        <div className="radio">
                        <input className="check" type="radio" name="gender" />Женский
                        </div>
                    </div>
                </form>
                <nav>
                    <NavLink href="/profile" className="buttonSecRegistration">Зарегистрироваться</NavLink>
                </nav>
                <p id="enterLink">Если уже зарегистрированны,<br/> то <span id="underline"> <NavLink id="enterLink" href="/authorization"> авторизуйтесь </NavLink> </span></p>
            </div>
        </div>
    );
};

export default Registration;