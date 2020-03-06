// import React from "react";
// import List from "./List";

// class Input extends React.Component {
//   state = {
//     value: "",
//     nameList: [],
//     emailList:[]
//   };
//   handleSubmitAction = () => {
//     let newList = [...this.state.nameList],[...this.state.emailList];
//     newList.push(this.state.value);
//     this.setState({ nameList,emailList: newList });
//   };
//   handleInputChange = event => {
//     this.setState({ value: event.target.value });
//   };
//   handleInputChange = event => {
//     this.setState({ value: event.target.value });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           onChange={event => this.handleInputChange(event)}
//           type="text"
//           placeholder="enter name"
//         />
//                 <input
//           onChange={event => this.handleInputChange(event)}
//           type="text"
//           placeholder="enter email"
//         />
//         <br />

//         <button
//           type="button"
//           onClick={this.handleSubmitAction}
//           disabled={this.state.value === ""}
//         >
//           Submit
//         </button>
//         <List nameList={this.state.nameList} />
//         <List emailList={this.state.emailList}></List>
//       </div>
//     );
//   }
// }
// export default Input;