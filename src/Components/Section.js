import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    const { title, backImg, subtitle, leftBtn, rightBtn, downArrow } = props;
    return (
        <Wrap bgImg={backImg}>
            <Itemtext>
                <Fade bottom>
                    <CarModel>{title}</CarModel>
                    {subtitle && <p>{subtitle}</p>}
                </Fade>

                

            </Itemtext>
            <Fade bottom>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        <b>{leftBtn}</b>
                    </LeftButton>
                    {rightBtn && <RightButton>
                        <b>{rightBtn}</b>
                    </RightButton>}

                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" visible={downArrow}>
                </DownArrow>
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100%;
    text-align:center;
    background-image:${props => `url("images/${props.bgImg}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:15vh 0 4vh;
`;

const Itemtext = styled.div``;
const CarModel = styled.h1`
    font-size:2.8rem;
    font-weight:500;
    opacity:.75;
`;

const ButtonGroup = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:12px;
`;

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    cursor:pointer;
    width:220px;
    border-radius:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    opacity:.85;
    text-transform:uppercase;
    font-size:.85rem;
`;
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
`;

const DownArrow = styled.img`
    height:40px;
    margin-top:20px;
    visibility:${props => props.visible};
    animation: animateDown infinite 1s;
`;

const Buttons = styled.div``;