import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'



const Conatiner = styled.div`
height:60px;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center ;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray; 
display:flex;
align-items:center;
margin-left:25px;
padding:5px;

`

const Input = styled.input`
border:None ;
outline: none;
`
const Center = styled.div`
flex:1;
text-align:center ;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end ;

`

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer ;
margin-right: 30px  ;
`



const Navbar = () => {
    return (
        <Conatiner>
            <Wrapper>
                <Left>
                    <Language>  English  </Language>
                    <SearchContainer>

                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />

                    </SearchContainer>

                </Left>
                <Center>
                    <Logo >
                        HZ.com
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SignIn</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="Secondary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>

        </Conatiner>
    )
}

export default Navbar