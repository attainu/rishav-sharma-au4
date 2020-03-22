import React from 'react';
import {Link} from  'react-router-dom';

export default function() {
    return (
        <ol>
            <li><Link to = "/order/1">Order 1</Link></li>
            <li><Link to = "/order/1">Order 2</Link></li>
            <li><Link to = "/order/1">Order 3</Link></li>
        </ol>
    )
}