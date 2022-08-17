import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const Container = styled.div``

const Wrapper = styled.div`
padding:50px ;
display: flex;

`

const ImgContainer = styled.div`
flex:1 ;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover ;
`

const InfoContainer = styled.div`
flex:1 ;
padding:0px 50px ;
`

const Title = styled.h1`
font-weight: 200;
`

const Description = styled.p`
margin:20px 0px ;
`

const Price = styled.span`
font-weight: 100;
font-size:40px ;
`
const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin:30px 0px ;

`

const Filter = styled.div`
display: flex;
align-items: center;


`

const FilterTitle = styled.span`

font-size: 20px;
font-weight: 200;

`
const FilterColor = styled.div`
width:20px ;
height:20px ;
border-radius:50%;
background-color: ${props => props.color};
margin:0 5px ;
cursor:pointer ;
`

const FilterSize = styled.select`
margin-left:10px ;
padding:5px ;

`

const FilterSizeOption = styled.option`
padding:5px 

;`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor:pointer ;
`
const Amount = styled.span`
width:30px ;
height:30px ;
border-radius:10px;
border:1px solid teal ;
text-align:center ;
display: flex;
align-items: center;
justify-content: center;
margin:0 5px ;
cursor:pointer ;
`
const Button = styled.button`
padding: 15px;
border-radius: 5px;
border:2px solid teal ;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #f8f4f4;
}
`



const Product = () => {
    return (
        <Container>

            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Jean</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Description>
                    <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S </FilterSizeOption>
                                <FilterSizeOption>M </FilterSizeOption>
                                <FilterSizeOption>L </FilterSizeOption>
                                <FilterSizeOption>XL </FilterSizeOption>
                                <FilterSizeOption>XXL </FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />


        </Container>
    )
}

export default Product