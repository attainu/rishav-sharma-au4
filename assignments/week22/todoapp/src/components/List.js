import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../store/store';
import {Modal}  from 'react-bootstrap'

class List extends Component {

    state= {
        show: false,
        todo: "",
        date:"",
        toEdit:""
    }

    completedTodo = todoName => {
        this.props.dispatch({
            type:"COMPLETED",
            data: todoName
        })
    }

    deleteTodo = todoName => {
        this.props.dispatch({
            type:"DELETE_TODO",
            data: todoName
        })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleShow = () => this.setState({show: true})
    handleShow = () => this.setState({show: false})

    edit = todoName => {
        this.handleShow()
        this.setState({
            toEdit: todoName
        })
    }

    updateTodo = () => {
        const payload = {
            toEdit: this.state.toEdit,
            todo: this.state.todo,
            date: this.state.date
        }
        this.props.dispatch({
            type: "EDIT_TODO",
            data: payload
        })
        this.handleClose()
    }

    render() {
        const data = this.props.todo
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <select>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="todo">Active</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Todo Items</th>
                                        <th>Deadline</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    data.length < 1 ? <tr><td> You are caught up!</td></tr> : data.map((obj, idx) =>
                                    <tr key={idx}>
                                        <td 
                                        className={obj.completed ? "text-success" : "text-danger"}
                                        onClick={() => this.completedTodo(obj.todo)}
                                        >
                                            {obj.todo}
                                            </td>
                                        <td>{obj.date}</td>
                                        <td>
                                            <span className="badge badge-danger"
                                            onClick={() => this.deleteTodo(obj.todo)}>
                                                Delete</span>
                                                <span
                                                onClick={() => this.edit(obj.todo)} 
                                                className="badge badge-success">
                                                    Edit</span>
                                                    </td>
                                                    </tr>
                                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit this todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.update}></button>
                    </Modal.Footer>
                    
                </Modal>
            </Fragment>
        )
    }
}
export default connect(stateMapper)(List)