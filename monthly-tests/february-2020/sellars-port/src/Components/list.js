import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        area: "All",
        category: "All",
        status:"All"
      };
  }
  areaOnChange(value){
    this.setState({ area: value });  
  }
  categoryOnChange(value){
    this.setState({ category: value });  
  }
  statusOnChange(value){
    this.setState({ status: value }); 
  }
  checkStatus(todoDate){
        // <-- current day -->
        const currentday = () => {
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth() + 1;
          var yyyy = today.getFullYear();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          today = yyyy + mm + dd;
          return today;
        };
        // <-- end -->
        todoDate = todoDate.replace(/-/g, "");
        let todoDateNum = parseInt(todoDate);
        let currentdayNum = parseInt(currentday());
        if (todoDateNum === currentdayNum) return "Close";
        else return "Open";  
  }
  render() {
      console.log(this.props.shops)
    return (
    <div>
        <span className="m1">
          Area Filter
          <select
          onChange={e => {
            this.areaOnChange(e.target.value);
          }}
          >
            {this.props.areas.map((area, index) => {
              return <option key={index}>{area}</option>;
            })}
          </select>
        </span>
        <span className="m1">
          Category Filter
          <select
          onChange={e => {
            this.categoryOnChange(e.target.value);
          }}
          >

             {this.props.categories.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>
        </span>
        <span className="m1">
          Status Filter
          <select
          onChange={e => {
            this.statusOnChange(e.target.value);
          }}
          >
            <option >All</option>
            <option >Open</option>
            <option >Close</option>
          </select>
        </span>
        <div>
         <table style={{width:'100%',border:'1px solid'}}>
             <tr>
                    <th>SHOP NAME</th>
                    <th>AREA</th>
                    <th>CATEGORY</th>
                    <th>OPENING DATE</th>
                    <th>CLOSING DATE</th>
                    <th>STATUS</th>
             </tr>
         
         {
             this.props.shops.map(el=>
                <tr>
                    <td>{el.shopName}</td>
                    <td>{el.area}</td>
                    <td>{el.category}</td> 
                    <td>{el.openingDate}</td>
                    <td>{el.closingDate}</td>
                    <th>{el.status}</th>
                </tr>
             )
         }     
         </table>
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    shops: state.shops,
    areas: state.areas,
    categories: state.categories

  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
