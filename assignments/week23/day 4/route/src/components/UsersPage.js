import React from 'react';

export default props => {
    return <h2> Welcome Username: {props.match.params.username}</h2>
}