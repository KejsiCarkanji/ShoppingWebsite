import { Link } from "react-router-dom"
import { useState } from "react"

export default function Product({img, title, price, id, description, addProduct}){

    return (
        <div>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
            {!description && 
            <Link to={`/`+id}>View Details</Link>
            }
            {description &&
            <p>{description}</p>
            }
            <button onClick={addProduct}>Add to Cart</button>
        </div>
    )
}