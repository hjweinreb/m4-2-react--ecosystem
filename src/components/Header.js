import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <span> <Title className="header">Fruit Emporium</Title>
            <a href="/about"> About </a>
            <a href="/items"> Items </a>
            <a href="/"> Home </a> </span>
    )
}

const Title = styled.h1`
    background-color: red;
`;

export default Header;