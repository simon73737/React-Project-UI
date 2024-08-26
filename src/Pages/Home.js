import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';
import ExpenseManagement from '../Components/ExpenseManagement';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Home Page"
    };
  };

  render() {
    return (
      <>
        <section className="flex basis-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
          <div className="flex flex-row pt-20 pb-8 space-x-4 px-4 h-full w-full">

            {/* Stats Section */}
            <div className="w-1/3 h-full pb-2 border-4 bg-white">
              <ExpenseManagement />
            </div>

            {/* Investment Tracking Section */}
            <div className="w-2/3 px-2 h-full border-4 bg-white">
              <label className="w-full text-xl flex justify-center"> INVESTMENTS </label>

              {/* Info Section */}
              <div className="w-full flex flex-row mt-8">
                <div className="w-1/2 flex flex-col">
                  <label className="text-2xl font-bold">Investment Management</label>
                  <label className="text-md">Track Your Current Investments</label>
                </div>
                <div className="w-1/2 flex flex-row-reverse">
                    <button
                      class="w-2/5 h-full mx-4 rounded-md bg-[#24A65C] text-white"
                      onClick={() => console.log("CLICKED")}>
                      Add Investment
                    </button>
                  <input
                    type="Search"
                    id="Search"
                    className="p-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    defaultValue="Search"
                    autocomplete="off"
                    readonly
                    onChange={event => console.log(event.target.value)} />
                </div>
              </div>



              <div className="mt-7 border-2 rounded-md">
                <div className="w-full flex flex-row border-b-4">
                  <div className="w-1/3 flex flex-col ml-4 my-4">
                    <label className="text-lg">Symbol</label>
                  </div>
                  <div className="w-1/3 my-4">
                    <label className="text-lg">Amount Owned</label>
                  </div>
                  <div className="w-1/3 my-4">
                    <label className="text-lg">Current Price</label>
                  </div>
                </div>
                
                <div className="flex flex-col divide-y-2">
                </div>
              </div>
              
            </div>


          </div>
        </section>
      </>
    )
  }
}

export default withNavigate(Home);