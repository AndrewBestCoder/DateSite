import React from 'react';
import "./temsModal.css"
import {AiOutlineMessage} from "react-icons/ai";
import {BsFillHeartFill} from "react-icons/bs";

const ItemsModal = (props) => {
    return (
        <div className="modals">
            <div className="photoInfDes">
                <div className="photoInf">
                    <div className="photoModal">
                        <img src={props.data.photo}/>
                    </div>
                    <div className="inf">
                        <p id="textInf">{props.data.name}</p>
                        <p id="textInf">{props.data.secName}</p>
                        <p id="holder">Город</p>
                        <p id="textInf">{props.data.city}</p>
                        <p id="holder">Возраст</p>
                        <p id="textInf">{props.data.age}</p>
                    </div>
                </div>
                <div className="descriptionModal">
                    <p id="desModal">Люблю рисовать и играть на скрипке. Ищу парня с хорошим
                        чувством юмора.</p>
                </div>
            </div>
            <div className="likeMess">
                <BsFillHeartFill className="like"/>
                <AiOutlineMessage className="mess"/>
            </div>
        </div>
    );
};

export default ItemsModal;