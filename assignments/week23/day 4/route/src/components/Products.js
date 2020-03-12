import React from 'react';
import {Link} from  'react-router-dom';

export default function() {
    return (
        <ol>
            <li><Link to = "/product/1">Product 1</Link></li>
            <li><Link to = "/product/2">Product 2</Link></li>
            <li><Link to = "/product/3">Product 3</Link></li>
        </ol>
    )
}