import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    name: "",
    email: "",
    namelist: [],
    emaillist:[],
    showValue: "all"
  };

  SetSpan = event => {
    this.setState({
      name: event.target.value
    });
  };

  Setemail= event => {
    this.setState({
      email: event.target.value
    });
  };

  updateList = () => {
    let list = this.state.namelist
    list.push(this.state.name);
    let list1=this.state.emaillist
    list1.push(this.state.email)
    this.setState({
      name: "",
      email: "",
      namelist: list,
      emaillist:list1
    });
    console.log(this.state.namelist)
    console.log(this.state.emaillist)
  };

  SetShowList = event => {
    this.setState({
      showValue: event.target.value
    });
  };

  render() {
    var {namelist,emaillist}=this.state
    return (
      <div>
        <input
          type="string"
          onChange={event => this.SetSpan(event)}
          value={this.state.name}
        />
        <input
          type="string"
          onChange={event => this.Setemail(event)}
          value={this.state.email}
        />
        {/*  */}
        
        <select onChange={event => this.SetShowList(event)} id="city">
          <option value="all">All</option>
          <option value="0">Mumbai</option>
          <option value="1">Kolkata</option>
          <option value="2">Delhi</option>
          <option value="3">Bangalore</option>
          <option value="4">Mangalore</option>
          <option value="5">Goa</option>
          <option value="6">Patna</option>
        </select>
        <button
          onClick={() => this.updateList()}
          type="button"
          disabled={
            this.state.name.length === 0 || this.state.email.length === 0
          }
        >
          Submit
        </button>
        <span>Element:Name:-{this.state.name},Email:-{this.state.email}</span>
        <span><hr></hr>
          Name:-
          {
            namelist.map(el=><ul>{el}</ul>)
          }
        </span>
        <span>Email:-
          {
            emaillist.map(el=><ul>{el}</ul>)
          }
        </span>
        <span>
          {
            
          }
        </span>
      </div>
    );
  }
}

export default App;
