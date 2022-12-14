import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE


const Container = styled.div`
`
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "0px 10px" })} 
`
const Title = styled.h1`
font-weight: 300;
text-align:center ;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content:space-between ;
padding: 20px;

${mobile({ flexDirection: "column", gap: "20px" })}

`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor:pointer ;
border :${props => props.type === 'filled' && 'none'};
background-color :${props => props.type === 'filled' ? 'black' : "transparent"};
color:${props => props.type === 'filled' && 'White'};
`
const TopTexts = styled.div`
${mobile({ display: "none" })} 
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;

${mobile({ flexDirection: "column", gap: "20px" })} 
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column", marginBottom: "20px" })} 
`
const ProductDetails = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
width: 200px;`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column ;
justify-content:space-around ;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.span`
width:20px ;
height:20px ;
border-radius:50%;
background-color:${props => props.color};
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
flex:1;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px ;
`
const ProductAmount = styled.div`
font-size:24px ;
margin:5px ;
border:0.5px solid teal ;
padding:5px ;
border-radius:5px ;
${mobile({ margin: "5px 15px" })} 

`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({ fontSize: "24px", marginBottom: "20px" })} 
`
const Hr = styled.hr`
background-color:#eee;
border:none ;
height:1px ;
`

const Summary = styled.div`
flex :1;
border:0.5px solid lightgray;
border-radius:10px ;
height:40vh ;
padding: 20px;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`

margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === 'total' && '500'};
font-size: ${props => props.type === 'total' && "24px"};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black ;
color:white ;
font-weight: 600;
cursor: pointer;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();


    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", { tokenId: stripeToken.id, amount: cart.total * 100 })
                navigate("/sucess", {
                    state: {
                        stripeData: res.data,
                        products: cart,
                    }
                });
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, navigate, cart])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>

                    <TopButton >Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your WishList</TopText>

                    </TopTexts>
                    <TopButton type='filled'>Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((item) => (
                            <Product key={item._id}>
                                <ProductDetails>
                                    <Image src={item.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {item.title}</ProductName>
                                        <ProductId><b>ID:</b>{item._id}</ProductId>
                                        <ProductColor color={item.color} />
                                        <ProductSize><b>Size:</b>{item.size}</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{item.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice><b>Price:</b> $ {item.price * item.quantity}</ProductPrice>

                                </PriceDetails>
                            </Product>
                        ))}

                        <Hr />


                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <Hr />
                        <SummaryItem>
                            <SummaryItemText>SubTotal:</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping:</SummaryItemText>
                            <SummaryItemPrice>$ 3.0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount:</SummaryItemText>
                            <SummaryItemPrice>$ -3.0</SummaryItemPrice>
                        </SummaryItem>
                        <Hr />
                        <SummaryItem type="total">
                            <SummaryItemText >Total:</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="HZ Shop"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>


            </Wrapper>

            <Footer />

        </Container >
    )
}

export default Cart