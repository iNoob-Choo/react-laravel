import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserForm extends Component {

    constructor(props) {
     super(props);
     //Initialize the state in the constructor
    }


    handleClick(e) {
      e.preventDefault();
      var url = __props.url;
      var csrfToken = __props.csrfToken;
      let data = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
      };
      console.log(url);
      let status = null;
      let statusText = null;

      fetch(url, {
       method: 'POST',

       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'X-CSRF-TOKEN': csrfToken,
       },

       credentials: 'same-origin',

       body: JSON.stringify(data),
       })
       .then(
         response => {
         status = response.status;
         statusText = response.statusText;
         return response.json();
       }

       )
       .then(
         response => {
           if(status === 200) {
           // Valid Response.
           // Check JSON response for successful operation, if applicable
           }
           else if(status === 422) {
             // Validation Error
             // Check JSON response for error messages
           }
           else {
           // All other errors
            throw Error([status, statusText].join(' '));
           }
       })
       .catch(error => alert(error));
      }

     render() {
        return (
            <div>
                <form name="userForm" className="form-horizontal" onSubmit={this.handleClick}>
                    <div id="form">
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="name">Name</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="name"
                                       name="name"
                                       required="required"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="email"
                                       name="email"
                                       required="required"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="password">password</label>
                            <div className="col-sm-10">
                                <input type="password"
                                       id="password"
                                       name="password"
                                       required="required"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                        id="user_submit"
                                        className="btn-default btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
  }

 (() => {
    var element = document.getElementById('user-form');
     if(element) {
       //first para Users = class name
     ReactDOM.render(<UserForm />, element);
   }
 })();
