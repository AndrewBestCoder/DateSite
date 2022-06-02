import React, {useState} from 'react';
import './dataItem.css';
import { IoLocationOutline } from "react-icons/io5";
import MyModal from "../../Mymodal/MyModal";
import ItemsModal from "../../Mymodal/itemsModal/itemsModal";
import {MdArrowBackIosNew} from "react-icons/md";


const DataItem = (props) => {

    const [modal, setModal] = useState(false);

    return (
        <>
        <MyModal visible={modal} setVisible={setModal}>
            <button className="closeButton" onClick={() => setModal(false)}>
                <MdArrowBackIosNew className="backIcon"/> Назад
            </button>
            <ItemsModal data={props.data}/>
        </MyModal>
        <button className="openButton" onClick={() => setModal(true)}>
        <div className="peopleItem">
            <div className="image">
                <img src={props.data.photo}/>
            </div>
            <div className="description">
                <p id="name">{props.data.nameItem}, {props.data.age}</p>
                <p id="loc"> <IoLocationOutline className="iconLoc" /> {props.data.city} </p>
            </div>
        </div>
        </button>
        </>
    );
};

export default DataItem;