import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title = "Model S" 
                backImg = "model-s.jpg" 
                subtitle = "Order Online for Touchless Delivery"
                leftBtn = "custom order"
                rightBtn = "existing inventory"
                downArrow = "visble"
            />
            <Section
                title = "Model Y" 
                backImg = "model-y.jpg" 
                subtitle = "Order Online for Touchless Delivery"
                leftBtn = "custom order"
                rightBtn = "existing inventory"
                downArrow = "hidden"
            />
            <Section
                title = "Model 3" 
                backImg = "model-3.jpg" 
                subtitle = "Order Online for Touchless Delivery"
                leftBtn = "custom order"
                rightBtn = "existing inventory"
                downArrow = "hidden"
            />
            <Section
                title = "Model X" 
                backImg = "model-x.jpg" 
                subtitle = "Order Online for Touchless Delivery"
                leftBtn = "custom order"
                rightBtn = "existing inventory"
                downArrow = "hidden"
            />
            <Section
                title = "Solar Panels" 
                backImg = "solar-panel.jpg" 
                subtitle = "Lowest cost solar panels in America."
                leftBtn = "Order Now"
                rightBtn = "Learn More"
                downArrow = "hidden"
            />
            <Section
                title = "Solar Roof" 
                backImg = "solar-roof.jpg" 
                subtitle = "Produce Clean Energy From Your Roof"
                leftBtn = "Order Now"
                rightBtn = "Learn More"
                downArrow = "hidden"
            />
            <Section
                title = "Accessories" 
                backImg = "accessories.jpg" 
                subtitle = ""
                leftBtn = "Shop now"
                downArrow = "hidden"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;

`
