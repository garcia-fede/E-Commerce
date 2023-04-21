import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from './Context'

const ProductDetail = () => {
    const {product} = useParams()
    const [detailedProduct,setDetailedProduct] = useState()
    const {products,convertURL} = useContext(context)
    console.log(products)

    return (
        <div className='WIP'>Work in progress</div>
    )
}

export default ProductDetail