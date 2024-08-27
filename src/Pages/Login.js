import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Login Page",
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      errors: false
    };
  };

  login() {
    let errors = {};
    // Check if email format is valid
    if(!this.validateEmail(this.state.email)) {
      errors.emailError = true;
      this.setState({...this.state, emailError: true});
    }
    if(this.state.email === "") {
      errors.emailError = true;
      this.setState({...this.state, emailError: true, errors: true});
    }
    if(this.state.password === "") {
      errors.passwordError = true;
      this.setState({...this.state, lastNameError: true, errors: true});
    }
    
    
     // Update the state with the errors
    this.setState(errors, () => {
      // Check if the errors object is empty
      if (Object.keys(errors).length === 0) {
        // Data all looks good, Call login API
        axios.post('/login', {
          email: this.state.email,
          password: this.state.password
        }).then((res) => {
          this.props.navigate("/dashboard");
        }).catch((error) => {
          console.log(error);
        });
      } else {
        console.log("Errors found, not making API call");
      }
    });
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  render() {
    return (
      <>
        <section className="flex basis-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
          <div className="w-full h-full flex justify-center items-center">
            <div className="py-8 bg-white w-1/5 flex-col rounded-xl shadow-xl">
            <h4 className="flex justify-center w-full text-3xl font-bold mb-4 pb-2 border-b">Login</h4>
              {/* Being Input Fields */}
              <div className="flex justify-center">
                {!this.state.emailError ? 
                  <input
                    onChange={e => this.setState({...this.state, email: e.target.value})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Email"/>
                : 
                  <input
                    onChange={e => this.setState({...this.state, email: e.target.value, emailError: false})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg ring outline-none ring-4 ring-opacity-50 ring-red-600 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Email"/>
                }
              </div>
              <div className="flex justify-center">
                {!this.state.passwordError ? 
                  <input
                    onChange={e => this.setState({...this.state, password: e.target.value})}
                    type="password"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Password"/>
                : 
                  <input
                    onChange={e => this.setState({...this.state, password: e.target.value, passwordError: false})}
                    type="password"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg ring outline-none ring-4 ring-opacity-50 ring-red-600 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Password"/>
                }
              </div>
              {this.state.errors ?
                <h4 className="flex justify-center italic w-full mt-2 font-bold mb-4 pb-2 text-red-600 text-opacity-50">** Fields cannot be left blank **</h4>
              : null}
              {this.state.emailError ?
                <h4 className="flex justify-center italic w-full mt-2 font-bold mb-4 pb-2 text-red-600 text-opacity-50">** Email is invalid **</h4>
              : null}
              {/* End Input Fields */}
              <div className="mt-8 space-y-10">
                <div className="flex justify-center">
                  <button 
                    className="flex items-center justify-center w-2/3 py-3 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
                    onClick={() => this.login()}>
                    <p>Login</p>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="flex flex-col w-full pt-6 mt-6 border-t border-gray-200">
                  <p className="flex justify-center inline text-sm font-medium text-gray-700">
                    Don't have an account?
                  </p>
                  <a className="flex justify-center inline text-sm font-medium text-purple-700 hover:text-purple-900" href= { '/signup' }>
                    Create an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withNavigate(Login);