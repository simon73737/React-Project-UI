import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';
import MainIcon from '../Assets/MainIcon.png';
import HomePageIcon1 from '../Assets/HomePageIcon1.png';
import HomePageIcon2 from '../Assets/HomePageIcon2.png';
import HomePageIcon3 from '../Assets/HomePageIcon3.png';
import HomePageIcon4 from '../Assets/HomePageIcon4.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Home Page",
      email: ""
    };
  };

  handleSignInClick() {
    localStorage.setItem('email', this.state.email);
    this.props.navigate("/signup");
  }

  render() {
    return (
      <section className="h-screen flex flex-col">
        {/* Overview and Sign Up section */}
        <div className="w-full flex justify-center bg-[#F5F5F7] flex flex-row py-6">
          <img src={MainIcon} className="w-1/3 -ml-24"/>
          <div className="w-1/3 flex flex-col">
            {/* Header information */}
            <h1 className="w-full text-5xl text-center text-[#313131] font-bold mb-4 mt-32 ml-32">
              Take full control of tracking and managing all of your finances
            </h1>
            <h3 className="w-full text-xl text-center text-[#616161] font-bold ml-32">
              Track all of your expenses, manage your income, and track your investments to help make smart choices with your finances!
              Creating an account is, and will always be, totally free!
            </h3>

            {/* Sign Up Fields */}
            <div className="w-full ml-32 flex flex-row justify-between">
              <input
                onChange={e => this.setState({...this.state, email: e.target.value})}
                type="text"
                className="w-1/2 px-4 py-4 mt-12 mx-6 text-xl placeholder-gray-400 bg-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Email"/>

              <button 
                className="w-1/2 py-3 mt-12 mr-6 text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
                onClick={() => this.handleSignInClick()}>
                Create Account
              </button>
            </div>

            <div className="w-full ml-32 mt-4 flex flex-row justify-center">
              <p className="flex justify-center inline text-md font-medium text-[#616161]">
                Already have an account?
              </p>
              <a className="flex justify-center inline ml-1 text-md font-medium text-purple-700 hover:text-purple-900" href= { '/login' }>
                Go to login
              </a>
            </div>
          </div>
        </div>
        {/* Feature List */}
        <div className="w-full bg-[#ECECEC]">
          <div className="w-full flex flex-col">
            <h2 className="w-full text-4xl text-center text-[#313131] font-bold mb-4 mt-8">
              Some exciting features and many more on the way!
            </h2>
            <div className="flex flex-row justify-center my-16">
              <div className="w-1/4 flex flex-col p-8 border-4 border-opacity-75 border-purple-600 rounded-xl">
                <div className="w-full flex justify-center -mt-16">
                  <img src={HomePageIcon1} alt="Icon" className="block w-16 h-16 object-cover bg-[#ECECEC]"/>
                </div>
                <h3 className="font-bold text-center text-[#313131]">
                  View all of your finances on one screen
                </h3>
                <h4 className="text-center text-[#313131]">
                  Add your financial transactions and provide a date and classification, view a list of all transactions and monitor your spending habits
                </h4>
              </div>
              <div className="w-1/4 flex flex-col p-8 border-4 border-opacity-75 border-purple-600 rounded-xl mx-4">
                <div className="w-full flex justify-center -mt-16">
                  <img src={HomePageIcon2} alt="Icon" className="block w-16 h-16 object-cover bg-[#ECECEC]"/>
                </div>
                <h3 className="font-bold text-center text-[#313131]">
                  Filter and view snapshots of certain expense groups
                </h3>
                <h4 className="text-center text-[#313131]">
                  Once you've added some transactions to your account, we'll take it from there. Chose some filters and view your history at a glance
                </h4>
              </div>
              <div className="w-1/4 flex flex-col p-8 border-4 border-opacity-75 border-purple-600 rounded-xl">
                <div className="w-full flex justify-center -mt-16">
                  <img src={HomePageIcon3} alt="Icon" className="block w-16 h-16 object-cover bg-[#ECECEC]"/>
                </div>
                <h3 className="font-bold text-center text-[#313131]">
                  Add and track all of your investments
                </h3>
                <h4 className="text-center text-[#313131]">
                  Add your investments into your account and track their prices. Note that price tracking is not fully automatic as API keys are expensive and this is a personal project
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="w-1/3 flex flex-col ml-16">
              <h1 className="w-full text-5xl text-center text-[#313131] font-bold mb-4 mt-32">
                Dont keep guessing with your finances
              </h1>
              <h3 className="w-full text-xl text-center text-[#616161] font-bold">
                If you enjoy using this site and want to support the developer, please click here for some more info on how you can do that
              </h3>
            </div>
            <img src={HomePageIcon4} className="w-1/3"/>
          </div>
        </div>
        {/* Additional Info Section */}
        <div className="flex flex-row w-full">
        </div>
      </section>
    )
  }
}

export default withNavigate(Home);