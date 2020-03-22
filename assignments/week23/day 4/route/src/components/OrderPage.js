import React from 'react';

export default props => {
    return <h2> Orderpage of product with ID: {props.match.params.orderID}</h2>
}