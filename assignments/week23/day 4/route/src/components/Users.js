import React from 'react';
import {Link} from  'react-router-dom';

export default function() {
    return (
        <ol>
            <li><Link to = "/user/abhay">Abhay</Link></li>
            <li><Link to = "/user/rishav">Rishav</Link></li>
            <li><Link to = "/user/Sharma">Sharma</Link></li>
        </ol>
    )
}