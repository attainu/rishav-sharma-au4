import React, { Component,Fragment } from "react";

class StaticData extends Component {
    render(){
        return (
            <Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>Rs-{item.cost}</td>
                                    <td>
                                        <button className="btn btn-sucess"
                                        value={item.id}
                                        onClick={this.props.add}>
                                            Add To Cart
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default StaticData;