import React, { Component } from "react";

export default class Login extends Component {
  login() {
    this.props.history.push("/bus");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
              <div className="text-center">
                <h3>Log In</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Enter Your Username</label>
                    <input placeholder="User Name" className="form-control " />
                  </div>
                  <div className="form-group">
                    <label>Enter Your Password</label>
                    <input placeholder="Password" className="form-control " />
                  </div>
                  <div className="text-center ">
                    <button
                      className="btn btn-primary  "
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
