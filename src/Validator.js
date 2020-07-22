import React from 'react';
import './Validator.css';

function Validator() {
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <input type="text" value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" /> />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm password" />
      <input type="submit" value="Submit" class="btn btn-success" />


    </div>
  );
}

export default Validator;
