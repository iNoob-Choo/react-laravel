import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Users extends Component {
/**
* Constructor
*
*/
//this props comes from index.blade.php __props
constructor(props) {
 super(props);
 //Initialize the state in the constructor
   this.state = {
     fetched: false,
     users: null,
   }
 }

 /**
 * This is a lifecycle method that gets called after
 * the component is rendered.
 * Here, we fetch the JSON data of albums from the API.
 */
   componentDidMount() {
     var url = this.props.url;

     fetch(url, {
       headers: {Accept: 'application/json'},
       credentials: 'same-origin',
     })
     .then(response => {
       if (response.ok) return response.json();
       else throw Error([response.status, response.statusText].join(' '));
     })
     .then(users => {
       this.setState({ fetched: true });
       this.setState({ users });
     })
     .catch(error => alert(error));
   }

   //self define function
   renderHeadings() {
     return (
       <thead>
         <tr>
           <th>No.</th>
           <th>Name</th>
         </tr>
       </thead>
     )
   }
   //self define function
   renderUsers() {
   return this.state.users.map((user, i) => {
     return (
         <tr key={ user.id }>
         <td className="table-text">
         <div>{ i + 1 }</div>
         </td>
         <td className="table-text">
         <div>
         <a href={ ['user', user.id].join('/') }>
         { user.name }
         </a>
         </div>
         </td>
         </tr>
         );
     });
   }
   //self define function
   renderTable() {
     return (
       <table className="table table-striped">
       { this.renderHeadings() }
       <tbody>
       { this.renderUsers() }
       </tbody>
       </table>
     );
   }
   //self define function
   renderEmpty() {
     return (
       <div>
       No records found
       </div>
     );
   }
   //self define function
   renderLoader() {
     return (
       <div>
       Loading Users...
       </div>
     );
   }

   render() {
     if(this.state.fetched && this.state.users) {
         if(this.state.users.length) {
           return this.renderTable();
         }
         else {
           return this.renderEmpty();
         }
       }
         else {
           return this.renderLoader();
         }
    }
}

 (() => {
    var element = document.getElementById('users-index');
     if(__props && element) {
       //first para Users = class name
     ReactDOM.render(<Users  {...__props}/>, element);
   }
 })();
