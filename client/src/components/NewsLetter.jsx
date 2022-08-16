import { Send } from '@material-ui/icons'
import React from 'react'

import styled from 'styled-components'
const Container = styled.div`
height:60vh;
background-color: #fcf5f5;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;



`
const Title = styled.h1`
font-size: 70px;
margin-bottom:20px ;

`
const Description = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom:20px ;
`

const InputContainer = styled.div`
width:50% ;
height:40px;
background-color:white ;
display:flex ;
justify-content: space-between;


`

const Input = styled.input`

border:none ;

border-bottom:1px solid lightgray ;
font-size:20px ;
padding-left:20px ;
align-items:center ;
flex:8
`

const Button = styled.button`
flex:1 ;
cursor: pointer;
border:none ;
background-color: teal ;
color:white ;
;

`

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get Timely Updates From Your Favourite Products</Description>
            <InputContainer>
                <Input placeholder='Enter your Email' />
                <Button >
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default NewsLetter