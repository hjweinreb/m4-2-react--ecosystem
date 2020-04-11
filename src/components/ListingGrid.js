import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListingItem from './ListingItem'


const ListingGrid = ({ itemList }) => {
    return (
        <Div>
            {itemList.map(item => (
                <ListingItem key={item.id} item={item} />
            ))}
        </Div>
    );
};

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Div = styled.div`
    maximum-height: 24px;
`;

export default ListingGrid;