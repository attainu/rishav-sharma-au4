import React from 'react';
import {Link} from  'react-router-dom';

export default function() {
    return (
        <ol>
            <li><Link to = "/product/1">Product 1</Link></li>
        </ol>
    )
}