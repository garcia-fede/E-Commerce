import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { context } from './Context'

const CartProduct = ({cartItem}) => {
    const {convertURL,removeCartItem,updateCartQuantity} = useContext(context)
    let productURL = convertURL(cartItem.product)
    // const [isTrue, setIsTrue] = useState(true);

    const updateQuantity = (product,isIncrement)=>{
        let newQuantity = product.order.quantity
        if(isIncrement){
            newQuantity = newQuantity + 1
        } else if(newQuantity>1){
            newQuantity = newQuantity - 1
        }
        product.order.quantity = newQuantity
        updateCartQuantity()
    }
    
    return (
        <div className='cartProduct'>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{removeCartItem(cartItem)}}
            className="icon" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
            <Link to={`/product/${productURL}`}><img src={cartItem.product.image} alt={cartItem.product.tittle} /></Link>
            <div className="productContent">
                <div className="itemInfo">
                    <Link to={`/product/${productURL}`}><h3>{cartItem.product.title}</h3></Link>
                    <h3>{cartItem.product.price}</h3>
                    <p>{cartItem.product.description}</p>
                </div>
                <p>Size: {cartItem.order.size}</p>
            </div>
            <div className='buttons'>
                <div className="quantity">
                    <button className='substractButton' onClick={()=>{updateQuantity(cartItem,false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </button>
                    <div className="quantityInput">{cartItem.order.quantity}</div>
                    <button className='addButton' onClick={()=>{updateQuantity(cartItem,true)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="12" y1="7" x2="12" y2="17" />
                            <line x1="7" y1="12" x2="17" y2="12" />
                        </svg>
                    </button>
                </div>
                <Link to={`/product/${productURL}`}><button className="button">Details</button></Link>
            </div>
            <div className="subTotal">
                <h2>Subtotal:</h2>
                <p>{(cartItem.order.quantity * cartItem.product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartProduct