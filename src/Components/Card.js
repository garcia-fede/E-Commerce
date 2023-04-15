import React from 'react'

const Card = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt={product} />
            <p>{product.title}</p>
        </div>
    )
}

export default Card