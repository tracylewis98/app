import React, { Component } from "react";
import axios from "axios";


class Update extends React.Component {
    state = {
      bank: {
       bankId: "",
       bankName: "",
        address: "",  
      },
    };
   
    render() {
        // Object Destructuring
        const { bankId,bankName,address} = this.state.bank;
    
    return (
       <div>
          <form
            onSubmit={this.handleSubmit}
            className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
          >
            <div className="mb-3">
              <label htmlFor="bankId" className="form-label">
               Bank Id
              </label>
              <input
                type="number"
                className="form-control"
                id="bankId"
                aria-describedby="emailHelp"
                value={bankId}
                name="bankId"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bankName" className="form-label">
               Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                aria-describedby="emailHelp"
                value={bankName}
                name="bankName"
                onChange={this.handleChange}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                aria-describedby="emailHelp"
                value={address}
                name="address"
                onChange={this.handleChange}
              />
            </div>
          
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          </div>
      
    )
    }
}
export default Update;