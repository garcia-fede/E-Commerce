import React, { useContext,useRef,useEffect } from 'react'
import { context } from './Context'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'

const CartProductsContainer = () => {
    //Scroll to top of component
    const isMountedRef = useRef(false);
    useEffect(() => {
        if (!isMountedRef.current) {
        window.scroll(0, 0);
        isMountedRef.current = true;
        }
    }, []);

    let divider = " > "
    const {cartProducts} = useContext(context)
    return (
        <>
            <div className="websitePath">
                <p>Products<b>{divider}</b><span>Shopping Cart</span></p>
            </div>
            <div className="sectionTitle">
                <h1>Shopping Cart
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </h1>
            </div>  
            <div className='cartProductsContainer'>
                {cartProducts.length > 0 ? (
                    cartProducts.map((cartItem) => {
                        return <CartProduct key={cartItem.order.orderId} cartItem={cartItem} />;
                    })
                    ) : (
                    <div className='emptySection'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="6" cy="19" r="2" />
                            <path d="M17 17a2 2 0 1 0 2 2" />
                            <path d="M17 17h-11v-11" />
                            <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
                            <path d="M3 3l18 18" />
                        </svg>
                        <h3>Your cart is currently empty.</h3>
                    </div>
                    )
                }
                <div className="returnToProducts">
                    <Link to="/">
                        <button>Return to shop</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartProductsContainer