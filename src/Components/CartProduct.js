import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './Context'

const CartProduct = ({cartItem}) => {
    const {convertURL,removeCartItem} = useContext(context)
    let productURL = convertURL(cartItem.product)
    
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
                <div className="quantity">
                    <p>Quantity: </p><span>x {cartItem.order.quantity}</span>
                </div>
            </div>
            <div className='buttons'>
                <Link to={`/product/${productURL}`}><button className="button">Details</button></Link>
            </div>
        </div>
    )
}

export default CartProduct