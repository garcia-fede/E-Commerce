import React, { useContext } from 'react'
import { context } from './Context'
import CartProduct from './CartProduct'

const CartProductsContainer = () => {
    //Scroll to top of component
    window.scrollTo(0,0)
    
    const {cartProducts} = useContext(context)
    return (
        <>
            <div className='cartProductsContainer'>
                {cartProducts.map((cartItem)=>{
                    return <CartProduct key={cartItem.order.orderId} cartItem={cartItem} />
                })}
            </div>
        </>
    )
}

export default CartProductsContainer