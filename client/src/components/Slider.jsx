import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from "./../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height:100vh ;
    display: flex;
   position:relative ;
   overflow: hidden;

   ${mobile({ display: "none" })}
  
    
    `
const Arrow = styled.div`
width:50px ;
height:50px ;
background-color: #fff7f7;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
cursor:pointer ;
position:absolute ;
top:0;
bottom:0;
margin:auto;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
opacity:0.5 ;
z-index:2 ;
`
const Wrapper = styled.div`
height:100% ;
display: flex;
transform: translateX(${props => props.SlideIndex * -100}vw) ;
transition: all 1.5s ease ;



`
const Slide = styled.div`
width: 100vw;
height:100vh ;
display: flex;
align-items: center;
background-color: #${props => props.bg} ;
`
const ImgContainer = styled.div`
flex:1 ;
height:100%;
margin-left:20px ;
`
const Image = styled.img`
height:80% ;
`

const InfoContainer = styled.div`
flex:1 ;
padding: 50px;

`
const Title = styled.h1`
font-size:70px`
const Description = styled.p`
margin:50px 0px;
font-size:20px ;
font-weight: 500;
letter-spacing:3px ;
`

const Button = styled.button`
padding: 10px;
border-radius: 5px;
cursor:pointer ;
font-size:20px ;
background-color:transparent ;
`

function Slider() {

    const [slideIndex, setSlideIndex] = React.useState(0)

    const handleClick = (direction) => {

        if (direction === 'left') {
            if (slideIndex === 0) {
                setSlideIndex(sliderItems.length - 1)
            } else {
                setSlideIndex(slideIndex - 1)
            }
        } else {
            if (slideIndex < sliderItems.length - 1) {
                setSlideIndex(slideIndex + 1)
            } else {
                setSlideIndex(0)

            }

        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper SlideIndex={slideIndex}>

                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.img}>

                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>Show Now</Button>
                        </InfoContainer>
                    </Slide>

                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider