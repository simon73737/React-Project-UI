import React, { Component, createRef  } from 'react';
import { withNavigate } from '../Utils/withNavigate';
import axios from 'axios';
import Main from '../Assets/Main.png';
import Profile from '../Assets/Profile-Icon.png';
import ProfileDropDown from '../Components/ProfileDropdown';

class Menubar extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Login Page",
      auth: false,
      openDropDown: false
    };
    this.dropdownRef = createRef();
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
  };

  componentDidMount() {
    this.checkAuth();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.auth !== prevState.auth) {
      this.checkAuth();
    }
  }

  checkAuth = () => {
    axios.get('/isAuth', {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    }).then((res) => {
      this.setState({ auth: true });
    }).catch((error) => {
      this.setState({ auth: false });
    });
  };

  showDropdown() {
    if(!this.state.showDropdown) {
      this.setState({ openDropDown: true });
    } 
  };
  
  handleCloseDropdown() {
    this.setState({ openDropDown: false });
  }
  

  render() {
    return (
      <>
        <div className="flex justify-between w-full h-16 border-b-2 shadow-md fixed bg-white">
          <div className="flex flex-row w-1/2 cursor-pointer" onClick={() => this.props.navigate("/")}>
            <img src={Main} 
              alt="Icon" 
              className="w-12 h-12 ml-6 mt-2 object-cover cursor-pointer"
              onClick={() => this.props.navigate("/")}/>
            <label className="text-4xl text-[#313131] font-bold mt-2 ml-8">Simons Website</label>
          </div>

          <div className="flex flex-row-reverse w-1/2">
            <div>
              <img src={Profile} 
                alt="Icon" 
                className="w-12 h-12 mx-6 mt-2 object-cover cursor-pointer rounded-full"
                onClick={() => this.showDropdown()}/>
            </div>
            {!this.state.auth ?
            <button
              className="h-12 ml-4 mt-2 hover:font-bold"
              onClick={() => this.props.navigate("/login")}>
                Login
            </button>
            : null }
            <button
              className="h-12 mt-2 hover:font-bold"
              onClick={() => this.props.navigate("/dashboard")}>
                Dashboard
            </button>
          </div>
        </div>
        <ProfileDropDown dropdownOpen={this.state.openDropDown} handleOnClose={this.handleCloseDropdown}/>
      </>
    )
  }
}

export default withNavigate(Menubar);