import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';

class Menubar extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Login Page"
    };
  };
  

  render() {
    return (
      <>
        <div className="flex w-full h-16 border-b-2 shadow-md fixed bg-white">
          <div className="flex-none w-48">
            
          </div>
          <div className="flex-grow">
            <div className="flex justify-center">
              <label className="text-4xl">Simons Website</label>
            </div>
          </div>
          <div className="flex-none w-48">
            <button
              className="w-20 mr-4 h-8 mt-2 bg-[#24A65C] rounded-lg"
              onClick={() => this.props.navigate("/")}>
                Home
            </button>
            <button
              className="w-20 h-8 mt-2 bg-[#24A65C] rounded-lg"
              onClick={() => this.props.navigate("/login")}>
                Login
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default withNavigate(Menubar);