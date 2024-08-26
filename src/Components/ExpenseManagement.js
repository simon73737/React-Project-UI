import React, { Component } from 'react';
import { withNavigate } from '../Utils/withNavigate';
import Expense from './ExpenseComponents/Expense';

class ExpenseManagement extends Component {
  constructor() {
    super();
    this.state = {
    };
  };

  render() {
    return (
      <section className="w-full h-full">
        <div className="h-1/6">
          <label className="w-full text-xl flex justify-center"> Expense Manager </label>

          {/* Menu Bar For Add and Filter */}
          <div className="flex flex-row w-full h-16 px-2 py-2">
            <button className="w-3/5 h-full bg-purple-600 bg-opacity-100 rounded-md mr-2 text-white"> Soon to be Filter</button>
            <button
              className="w-2/5 h-full rounded-md bg-[#24A65C] text-white"
              onClick={() => console.log("CLICKED")}>
              Add Investment
            </button>
          </div>

          {/* Expense Title and Info Section */}
          <div className="flex flex-row">
            <div className="w-1/3 flex justify-center mx-2">
              Date
            </div>
            <div className="w-1/3 flex justify-center mx-2">
              Classification
            </div>
            <div className="w-1/3 flex justify-center mx-2">
              Amount
            </div>
          </div>
        </div>

        {/* Container For Expenses */}
        <div className="w-full h-5/6 overflow-auto border-t-2 border-black">
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
          <Expense />
        </div>
      </section>
    )
  }
}

export default withNavigate(ExpenseManagement);