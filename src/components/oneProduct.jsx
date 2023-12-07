import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

//const OneProduct = (props) => {
const OneProduct = ({ name, text }) => {
    const design = { margin: 10, backgroundColor: 'lightgreen' };
    return (
        <div className='card' style={design}>
            <img src="https://picsum.photos/200" alt="Random slika" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">
                    {text}
                </p>
                <button className="btn"><FaPlus /></button>
                <button className="btn"><FaMinus /></button>
            </div>
        </div>
    )
}

export default OneProduct