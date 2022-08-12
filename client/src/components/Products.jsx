import React from 'react'
import { popularProducts } from '../data'
import styled from 'styled-components'
import Product from './Product'
const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content:space-between ;
`
function Products() {
    return (
        <Container>
            {popularProducts.map(product => (
                <Product item={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products