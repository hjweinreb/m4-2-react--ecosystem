import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <Paragraph className="about-info">Fruit emporium is founded on a very simple principle: Fruit is good.

        We carry the finest selection of produce from around the world, from tart citrus to sweet cherries.
        Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Paragraph>

    )
}

const Paragraph = styled.p`
    text-align: center;
    font-size: 28px;
`;

export default About;