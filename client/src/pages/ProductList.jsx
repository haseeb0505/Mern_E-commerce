
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'


const Container = styled.div``

const Title = styled.h1`
margin:20px`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin:20px ;
`

const Filter = styled.div`
margin:20px ;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;

`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
margin-left: 20px;
`
const Options = styled.option`

`

const ProductList = () => {
    return (

        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:
                        <Select >
                            <Options disabled selected>Colors</Options>
                            <Options>White</Options>
                            <Options>Red</Options>
                            <Options>Black</Options>
                            <Options>Blue</Options>
                            <Options>Yellow</Options>
                            <Options>Green</Options>
                        </Select>
                        <Select>
                            <Options disabled selected>size</Options>
                            <Options>S</Options>
                            <Options>M</Options>
                            <Options>L</Options>
                            <Options>XL</Options>
                            <Options>XXL</Options>
                        </Select>
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:
                        <Select>
                            <Options selected>Newest</Options>
                            <Options>Price (asc)</Options>
                            <Options>Price (desc)</Options>
                        </Select>
                    </FilterText>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList