import React,{Component,Fragment}from 'react';
import StaticData from './components/StaticData';
import Cart from './components/Cart';

class App extends Component {
  state = {
    items: [
      { id: "1", name: "Orange", cost: 5},
      { id: "2", name: "Banana", cost: 18},
      { id: "3", name: "Chiku", cost: 6},
      { id: "4", name: "Pomegranate", cost: 2},
      { id: "5", name: "Pears", cost: 12},
      { id: "6", name: "Apple", cost: 50},
      { id: "7", name: "Mausami", cost: 125},
      { id: "8", name: "PineApple", cost: 99},
    ],
    cart:[]
  }

  addToCart = (e) => {
    const id = e.target.value;
    const newItem = this.state.items.filter(item => item.id === id);
     this.setState({
      cart: [...this.state.cart, newItem[0]]
    })
  }
  deleteFromCart = (e) => {
    const id = e.target.value;
    const restofItems = this.state.cart.filter(
      (item, idx) => idx.toString !== id
    );
    this.setState({
      cart: restofItems
    })

  }
  render() {
    return (
      <Fragment>
        <div className="container-fluid bg-dark text-white text-center">
          <h1 className="display-4">Cart Assignment</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <StaticData items={this.state.items} add={this.addToCart} />
            </div>
            <div className="col-6">
              <Cart carts={this.state.cart} delete={this.deleteFromCart}/>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
