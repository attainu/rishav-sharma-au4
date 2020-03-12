 import React, {Fragment,Component } from 'react';
 import StaticData from './StaticData';

 class Cart extends Component {
     render() {
         const data = this.props.carts
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
                         data.length > 0 ? data.map((item, idx) =>
                         <tr key={idx}> 
                         <td>{item.name}</td>
                         <td>Rs-{item.cost}</td>
                         <td>
                             <button className= "btn btn-danger"
                                value={idx}
                                onclick={this.props.delete}
                             >Delete
                                 </button>
                            </td>
                         </tr>
                         ) : <tr><td>Nothing to show!!!!!!!!!!!</td></tr>
                     }
                     </tbody>
                 </table>

             </Fragment>
         );
     }
 }
 export default Cart;