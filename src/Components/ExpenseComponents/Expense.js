import React, { Component } from 'react';

class Expense extends Component {
  constructor() {
    super();
    this.state = {
      amount: 2.50,
      classification: "Other",
      date: "08/19/2024"
    };
  };

  render() {
    return (
      <section className="w-full h-16">
        <div className="flex flex-row h-full border-b-2 border-black hover:bg-[#FFFFF0]">
          <div className="w-1/3 flex justify-center mx-2">
            {this.state.date}
          </div>
          <div className="w-1/3 flex justify-center mx-2">
            {this.state.classification}
          </div>
          <div className="w-1/3 flex justify-center mx-2">
            {this.state.amount}
          </div>
        </div>
      </section>
    )
  }
}

export default Expense;