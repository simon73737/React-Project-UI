import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';


class ProfileDropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.wrapperRef = React.createRef();
      this.handleClickOutside = this.handleClickOutside.bind(this);
    };

    handleClickOutside(event) {
        if(this.props.dropdownOpen) {
          if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
              this.props.handleOnClose()
          }
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
  
    render() {
      return (
        <>
        {this.props.dropdownOpen && (
            <div className="absolute right-0 mt-14 mr-6 w-32 bg-white rounded-md shadow-lg z-10" ref={this.wrapperRef}>
              <ul className="py-1">
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      )
    }
  }
  
  export default withNavigate(ProfileDropDown);