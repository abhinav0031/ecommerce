import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map(product=>(
                        <Col key={product.id} sm={12} md={6} Lg={4} xL={3}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomeScreen
