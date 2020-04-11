import React from 'react';
import styled from 'styled-components';

//import styled from 'styled-components';

const ListingItem = ({ item }) => {
    return (
        <a href={`/items/${item.id}`}>
            <Fruitlist>
                <Fruititem>
                    <Fruitimage src={item.imageSrc} alt="hello" />
                    <div>{item.name}</div>

                    <div>{item.latinName}</div>
                </Fruititem>
            </Fruitlist>
        </a>
    );
};

const Fruitimage = styled.img`
    max-height: 100px;
    border-radius: 50px;

`;

const Fruitlist = styled.ul`
    display: inline;
`;

const Fruititem = styled.li`
width: 150px;
height: 100px;
background-color: yellow;
float: left;
`;


export default ListingItem;