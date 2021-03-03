import React from 'react'
import {Card} from 'react-boostrap'
function Product({product}) {
    return (
        <Card  className="my-3 p-3 rounded">
            <a href={'/product'/$(product._id)}>
                    <Card.Img src={product.img}/>
            </a>
            <Card.Body>
                <a href={''}></a>
            </Card.Body>
        </Card>
    )
}

export default Product
 