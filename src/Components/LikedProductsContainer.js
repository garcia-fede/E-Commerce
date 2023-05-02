import React, { useEffect,useContext } from 'react'
import { context } from './Context'
import LikedProduct from './LikedProduct'

const LikedProductsContainer = () => {
    //Scroll to top of component
    window.scrollTo(0,0)
    
    const {likedProducts} = useContext(context)

    return (
        <>
            <div className='likedProductsContainer'>
                {likedProducts.map(product=>{
                    return <LikedProduct key={product.productId} product={product} />
                })}
            </div>
        </>
    )
}

export default LikedProductsContainer