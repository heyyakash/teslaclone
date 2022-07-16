import React from 'react';
import styled from 'styled-components';

function Header(props) {
    return (
        <div>
            <Container>
                <a>
                    <Logo
                        src="/images/logo.svg">
                    </Logo>
                </a>
                <Menu>
                    <p><a href="#" class="menu_item">Model S</a></p>
                    <p><a href="#" class="menu_item">Model 3</a></p>
                    <p><a href="#" class="menu_item">Model X</a></p>
                    <p><a href="#" class="menu_item">Model Y</a></p>
                    <p><a href="#" class="menu_item">Solar Panel</a></p>
                    <p><a href="#" class="menu_item">Solar Roofs</a></p>
                </Menu>
                <RightMenu>
                    <p><a href="#" class="menu_item">Shop</a></p>
                    <p><a href="#" class="menu_item">Account</a></p>
                    <p><a href="#" class="menu_item" onClick = {props.toggleMenu}>Menu</a></p>
                </RightMenu>

            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center; 
    padding:0 20px;   

    @media (max-width:600px){
        padding:0 10px;nom
    }

`;

const Logo = styled.img`
    transform:scale(.7);
    height:50px;
    width:200px;

    @media (max-width:600px){
        transform:scale(1);
        height:75px;
        width:120px;
    }

`;


const Menu = styled.div`
    display:flex;

    @media (max-width:600px){
        display:none;
    }

`;
const RightMenu = styled.div`
    display:flex;
`;
