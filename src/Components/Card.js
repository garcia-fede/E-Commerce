import React from 'react'

const Card = ({product}) => {
    return (
        <div className="card">
            <div className="cardImgContainer">
                <img src={product.image} alt={product} />
            </div>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default Card