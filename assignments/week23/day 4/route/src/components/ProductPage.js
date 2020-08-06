import React from 'react';

export default props => {
    return <h2> Product page of product with ID: {props.match.params.productId}</h2>
}