import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../store/store'

class Form extends Component {
    state ={
        todo:"",
        date:"",
        completed: false
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        if(this.state.todo.trim().length <1) {
            alert("Type something before adding a todo!")
            return
        }
        const payload ={
            todo: this.state.todo,
            date: this.state.date,
            completed: this.state.completed
        }
        this.props.dispatch({
            type: "ADD_TODO",
            data: payload
        })
        this.setState({
            todo:"",
            date: ""
        })
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className ="mt-5 text-primary text-center display-4">
                        Todo App
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <lable htmlFor="todo">Todo item</lable>
                            <input
                            type="text"
                            className="form-control"
                            name="todo"
                            value={this.state.todo}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <lable htmlFor="date">Date</lable>
                            <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default connect (stateMapper)(Form);