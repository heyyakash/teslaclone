import React from 'react'
import styled from 'styled-components';

function Sidebar(props) {
    const {menu, toggleMenu} = props;
    return (
        <div>
            <SideContainer display = {menu}>
                <Close>
                    <CloseButton>
                        <i onClick = {toggleMenu} class="ri-close-line"></i>
                    </CloseButton>
                </Close>
                <Menu>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Existing Inventory</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Used Inventory</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Trade-In</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Test Drive</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Cybertruck</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Roadster</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Semi</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Charging</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Powerwall</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Commercial Energy</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Utilities</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Find Us</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Support</a></p>
                        <p><a href="#"onClick = {toggleMenu} class="menu_item">Investor Relations</a></p>
                </Menu>

            </SideContainer>
        </div>
    )
}

export default Sidebar

const SideContainer = styled.div`
    background-color:white;
    position:fixed;
    top:0;
    right:${props => props.display};
    height:100%;
    width: 25%;
    display:flex;
    transition:.2s;
    flex-direction:column;


    @media (max-width:600px){
        width:100%;
    }
`;

const Close = styled.div`
    width:100%;
    padding:10px;
`;
const CloseButton = styled.div`
    float:right;
    font-size:1.5rem;
    cursor:pointer;
`;

const Menu = styled.div`
    display:flex;
    padding:2rem;
    flex-direction:column;
    gap:20px;
    `;