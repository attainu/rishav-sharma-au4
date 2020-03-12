import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../store/store';

class List extends Component {
    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}
export default connect (stateMapper)(List)