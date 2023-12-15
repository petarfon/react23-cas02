import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

//const OneProduct = (props) => {
const OneProduct = ({ product, onAdd }) => {
    const design = { margin: 10, backgroundColor: 'lightgreen' };

    // function addToCart() {

    // }

    // const addToCart = () => {
    //     product.amount = product.amount + 1;
    //     console.log("Id: ", product.id, " amount: ", product.amount);
    // }
    return (
        <div className='card' style={design}>
            <img src="https://picsum.photos/200" alt="Random slika" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">
                    {product.description}
                </p>
                <button className="btn" onClick={() => onAdd(product.id)}><FaPlus /></button>
                <button className="btn"><FaMinus /></button>
            </div>
        </div>
    )
}

export default OneProduct