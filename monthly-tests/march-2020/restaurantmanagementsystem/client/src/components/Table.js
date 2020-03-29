import React, { Component } from 'react';
import {Link} from  'react-router-dom';
import {Spinner} from 'react-bootstrap';

class Table extends React.Component {
    state = {
        table: [],
        load:false
    }
    
    componentDidMount() {
        fetch('http://localhost:3020/table')
        .then((response) => response.json())
        .then(res => {
            console.log(res)
            this.setState({ 
                table: res,
                load:true 
            });
        });
    }

    render() {
        console.log(this.state.table)
        if(this.state.load===false){
            return (
                <div>
                    <Spinner/>
                </div>
            )
        }
        else{
            return (
                <div style={{display:'flex'},{'flex-wrap': 'wrap'}}>
                    {this.state.table.map((table,index) => (
                        <div key={index} class="card text-white bg-dark mb-3" style={{"min-width": "18rem"}}>
                            <div class="card-header">Table name: {table.name}</div>
                            <div class="card-body">
                                <h5 class="card-title">Seating capacity: {table.strength}</h5>
                                <p class="card-text">Floor: {table.floor}th</p>
                            </div>
                        </div>
                    ))}
                    <a type="button" class="btn btn-primary btn-lg btn-block" href="/waiters">Next</a>
                </div>
            );
        }
    }
}

export default Table;   

