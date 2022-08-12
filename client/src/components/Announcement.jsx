import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height:30px;
background-color: teal;
color:white ;
justify-content:center ;
display: flex;
align-items:center ;
font-size:14px ;
font-weight:500;

`
const Announcement = () => {
    return (
        <Container >
            Super Deal! Free Shipping on all orders over $100
        </Container>
    )
}

export default Announcement