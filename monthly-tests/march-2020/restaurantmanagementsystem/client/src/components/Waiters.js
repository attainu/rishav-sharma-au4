import React, { Component } from 'react';
import {Link} from  'react-router-dom';
import {Spinner} from 'react-bootstrap';

class Waiters extends Component {
    state = {
        waiters: [],
        load:false
    }
    
    componentDidMount() {
        fetch('http://localhost:3020/waiters')
        .then((response) => response.json())
        .then(res => {
            console.log(res)
            this.setState({ 
                waiters: res,
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
        
        return (
            <div>
                <div style={{display:'flex-auto'}}>
                {this.state.waiters.map((waiters,index) => (
                    <div class="card text-white bg-dark mb-3" style={{"min-width": "18rem"}}>
                        <div class="card-header">WaiterName : {waiters.waitername}</div>
                        <div class="card-body">
                        <p className="card-text">WaiterMobile : {waiters.waitermobile} </p>
                        <p className="card-text">Age: {waiters.waiterage} </p>
                        <p className="card-text">Ratings: {waiters.waiterratings} out of 10.</p>
                        <p className="card-text">Experience Years:{waiters.waiterexperience} years.</p>
                        </div>
                    </div>
                ))}
                <a type="button" class="btn btn-primary btn-lg btn-block" href="/orders">Next</a>
            </div>
            </div>
        );
    }
}

export default Waiters;