import React,{Component,Fragment}from 'react';
import StaticData from './components/StaticData';
import Cart from './components/cart';

class App extends Component {
  state = {
    items: [
      { id: "1", name: "Orange", cost: 5},
      { id: "2", name: "Orange", cost: 18},
      { id: "3", name: "Orange", cost: 6}
    ],
    cart:[]
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
              <StaticData items={this.state.items} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
