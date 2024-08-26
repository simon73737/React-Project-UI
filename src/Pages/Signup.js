import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Sign Up Page",
      firstName: "",
      firstNameError: false,
      lastName: "",
      lastNameError: false,
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      errors: false
    };
  };

  signUp() {
    let errors = {};
    // Check for errors
    if(this.state.firstName === "") {
      errors.firstNameError = true;
      this.setState({...this.state, firstNameError: true, errors: true});
    }
    if(this.state.lastName === "") {
      errors.lastNameError = true;
      this.setState({...this.state, lastNameError: true, errors: true});
    }
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
      console.log("Calling Sign Up");
      console.log(this.state);

      // Check if the errors object is empty
      if (Object.keys(errors).length === 0) {
        console.log("Make API call to sign up the user");
        this.props.navigate("/")
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
            <div className="py-16 bg-white w-1/5 flex-col rounded-xl shadow-xl">
              <h4 className="flex justify-center w-full text-3xl font-bold -mt-8 mb-4 pb-2 border-b">Create Account</h4>
              {/* Begin User Info Fields */}
              <div className="flex justify-center">
                {!this.state.firstNameError ? 
                  <input
                    onChange={e => this.setState({...this.state, firstName: e.target.value})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="First Name"/>
                : 
                  <input
                    onChange={e => this.setState({...this.state, firstName: e.target.value, firstNameError: false})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg ring outline-none ring-4 ring-opacity-50 ring-red-600 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="First Name"/>
                }
              </div>
              <div className="flex justify-center">
                {!this.state.lastNameError ? 
                  <input
                    onChange={e => this.setState({...this.state, lastName: e.target.value})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Last Name"/>
                : 
                  <input
                    onChange={e => this.setState({...this.state, lastName: e.target.value, lastNameError: false})}
                    type="text"
                    className="block w-2/3 px-4 py-4 mt-4 text-xl placeholder-gray-400 bg-gray-200 rounded-lg ring outline-none ring-4 ring-opacity-50 ring-red-600 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Last Name"/>
                }
              </div>
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
              {/* End User Input Fields */}
              <div className="mt-4 space-y-4">
                <div className="flex justify-center">
                  <button 
                    className="flex items-center justify-center w-2/3 py-3 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
                    onClick={() => this.signUp()}>
                    <p>Create Account</p>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withNavigate(Signup);