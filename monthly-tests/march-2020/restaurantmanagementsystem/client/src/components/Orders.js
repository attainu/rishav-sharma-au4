import React, { Component } from 'react';
import {Link} from  'react-router-dom';
import {Spinner} from 'react-bootstrap';

class Orders extends Component {
    state = {
        items: []
      };
    
      componentDidMount() {
        fetch("http://localhost:3020/menu")
          .then(response => response.json())
          .then(List => {
            this.setState({ items: List });
          });
      }
    
      render() {
        return (
          <div className="row">
            <div className="col-6 text-center">
              <div className="mt-2 mb-4 ">
                <input
                  className="form-control mt-3"
                  type="text"
                  placeholder="Customer Name"
                />
                <input
                  className="form-control mt-2"
                  type="number"
                  placeholder="Customer Mobile Number"
                />
              </div>
              MENU
              <div className="mt-2">
                <ul>
                {this.state.items.map((item, index) => (
                  <li style={{border: "2px black solid"}} key={index} className="p-1 m-2"> <span className="ml-5">{item.item_name}</span> , <span className="ml-5">{item.category}</span> , <span className="ml-5">{item.cuisine_name}</span> , <span className="ml-5">{item.item_price}</span></li>
                 ))}
                </ul>
              </div>
            </div>
            <div className="col-6">
                <br/>
            Cart items
              <div className="mt-">
                
              </div>
              <div className="text-right mt-5">total price <span></span> </div>
            </div>
          </div>
        );
      }
}

export default Orders;