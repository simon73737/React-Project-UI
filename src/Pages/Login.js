import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Login Page"
    };
  };

  render() {
    return (
      <>
        <section className="flex basis-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
          <div className="w-full h-full flex justify-center items-center">
            <div className="px-10 py-16 bg-white w-1/5 flex-col rounded-xl shadow-xl">
              <div className="flex justify-center">
                <input
                  onChange={e => console.log(e.target.value)}
                  type="text"
                  className="block w-2/3 px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                  placeholder="Email"
                />
              </div>
              <div className="flex justify-center">
                <input
                  onChange={e => console.log(e.target.value)}
                  type="password"
                  className="block w-2/3 p-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"    
                  placeholder="Password"
                />
              </div>

              <div className="mt-8 space-y-10">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-2/3 py-3 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
                    <p>Login</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2/3 pt-6 mt-6 border-t border-gray-200">
                  <p className="inline text-sm font-medium text-gray-700">
                    Don't have an account?
                  </p>
                  <a
                    className="inline text-sm font-medium text-purple-700 hover:text-purple-900"
                    href= { '/' }
                  >
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

export default Login;