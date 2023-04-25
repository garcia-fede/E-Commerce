import React, { useEffect } from 'react'
import { useContext } from 'react'
import { context } from './Context'
import LikedProduct from './LikedProduct'

const LikedProductsContainer = () => {
    const {likedProducts} = useContext(context)
    useEffect(()=>{
    },[likedProducts])

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