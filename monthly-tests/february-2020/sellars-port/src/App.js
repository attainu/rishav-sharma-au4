import React, { Component } from "react";

class App extends Component {
  state ={
    shop:"",
    area:"",
    category:"",
    open:"",
    close:"",
    shoparr:[],
    areaarr:[],
    categoryarr:[],
    openarr:[],
    closearr:[]
  }
  clicker = ()=>{
    var shope=this.state.shoparr
    shope.push(this.state.shop)
    var areae=this.state.areaarr
    areae.push(this.state.area)
    var categorye=this.state.categoryarr
    categorye.push(this.state.category)
    var opene=this.state.openarr
    opene.push(this.state.open)
    var closee=this.state.closearr
    closee.push(this.state.close)

    this.setState ={
      shop:"",
      area:"",
      category:"",
      open:"",
      close:"",
      shoparr:shope,
      areaarr:areae,
      categoryarr:categorye,
      openarr:opene,
      closearr:closee
    }
    console.log(this.state) 
  }
  render() {
    return (
      <div className="wrapper">
        <div id="shopName">
          <input type="text" placeholder="Shop Name" value={this.state.shop}
           onChange={(e) => this.setState({shop: e.target.value})} ></input>
        </div>
        <span id="areaSelector">
          <select id="area" onChange={(e) => this.setState({area: e.target.value})}>
          <option value="Area">Area</option>
            <option value="Jayanagar">Jayanagar</option>
            <option value="Basavanagudi">Basavanagudi</option>
            <option value="JP Nagar">JP Nagar</option>
            <option value="Padmanabhanagar">Padmanabhanagar</option>
            <option value="Banashankari">Banashankari</option>
            <option value="Uttarahalli">Uttarahalli</option>
            <option value="Kumaraswamy">Kumaraswamy</option>
            <option value="Girinagar">Girinagar</option>
          </select>
        </span>
        <span id="shopCategory">
          <select id="category" onChange={(e) => this.setState({category: e.target.value})}>
          <option value="Category">Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationery shop">Stationery shop</option>
            <option value="Hardware shop">Hardware shop</option>
            <option value="Flower">Flower</option>
            <option value="Newsagent">Newsagent</option>
            <option value="Furniture">Furniture</option>
          </select>
        </span>
        <input type="date" onChange={(e) => this.setState({open: e.target.value})} placeholder="Opening date"></input>
        <input type="date" onChange={(e) => this.setState({close: e.target.value})} placeholder="closing date"></input>
        <button onClick={(e) => this.clicker()}>Submit</button>
        <table>
          <tr>
          <th>ShopName</th>
          <th>Area</th>
          <th>Category</th>
          <th>open</th>
          <th>close</th>
          <th>status</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;