import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './Context'
const MatchProduct = ({product}) => {
    const {convertURL,removeLikedProduct,addToCart} = useContext(context)
    let productURL = convertURL(product)
    
    return (
        <div className='matchProduct'>
            <Link to={`/product/${productURL}`}><img src={product.image} alt={product.tittle} /></Link>
            <div className="productContent">
                <Link to={`/product/${productURL}`}><h3>{product.title}</h3></Link>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
            </div>
            <div className='buttons'>
                <Link to={`/product/${productURL}`}><button className="button">Details</button></Link>
                <Link><button className='addToCart' onClick={()=>{addToCart(product)}}>Add to cart</button></Link>
            </div>
        </div>
    )
}

export default MatchProduct