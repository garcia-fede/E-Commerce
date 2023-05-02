import React, { useContext,useRef,useEffect } from 'react'
import { context } from './Context'
import { Link } from 'react-router-dom'
import LikedProduct from './LikedProduct'

const LikedProductsContainer = () => {
    //Scroll to top of component
    const isMountedRef = useRef(false);
    useEffect(() => {
        if (!isMountedRef.current) {
        window.scroll(0, 0);
        isMountedRef.current = true;
        }
    }, []);

    let divider = " > "
    const {likedProducts} = useContext(context)
    return (
        <>
            <div className="websitePath">
                <p>Products<b>{divider}</b><span>Liked Products</span></p>
            </div>
            <div className="sectionTitle">
                <h1>Liked Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 11 12 14 20 6" />
                        <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                </h1>
            </div>  
            <div className='likedProductsContainer'>
                {likedProducts.length > 0 ? (
                    likedProducts.map((product) => {
                        return <LikedProduct key={product.productId} product={product} />;
                    })
                    ) : (
                    <div className='emptySection'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                        <h3>You haven't liked any products yet.</h3>
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

export default LikedProductsContainer