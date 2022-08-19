import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content:space-between ;
`
const Title = styled.span`
`
function Products({ filters, sort, cat }) {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const prod = await axios.get(cat ? `/products/?category=${cat} ` : "/products")

                setProducts(prod.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()

    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item =>

                Object.entries(filters).every(([key, value]) =>

                    item[key].includes(value)

                )
            )
        )

    }, [cat, filters, products])

    useEffect(() => {
        if (sort === "newest") {
            console.log("==>")
            setFilteredProducts(prev => [...prev.sort((a, b) => b.createdAt - a.createdAt)])

        } else if (sort === "asc") {
            setFilteredProducts(prev => [...prev.sort((a, b) => a.price - b.price)])
        } else {
            setFilteredProducts(prev => [...prev.sort((a, b) => b.price - a.price)])
        }

    }, [sort])
    return (
        <Container>
            {cat ? filteredProducts.map(product => (
                <Product item={product} key={product._id} />

            )) : products.slice(0, 8).map(product => (
                <Product item={product} key={product._id} />

            ))}


        </Container>
    )
}

export default Products