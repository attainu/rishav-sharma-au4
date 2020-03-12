import React from 'react';
import Form from './Form';
import List from './List';
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function App() {
    return (
        <Provider store={store}>
        <React.Fragment>
            <Form />
            <list />
        </React.Fragment>
        </Provider>
    )
}