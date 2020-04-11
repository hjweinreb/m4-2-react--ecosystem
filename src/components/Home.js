import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { items } from '../data';



function Home() {
    let thegoods = Object.values(items);
    console.log(thegoods)

    return (
        <div> <Paragraph className="about-info">Fruit emporium sells the finest fruits from this world and beyond.

        Browse items:</Paragraph>
            <ListingGrid itemList={Object.values(items)} />
        </div>

    )
}

const Paragraph = styled.p`
    text-align: center;
    font-size: 28px;
`;

export default Home;
