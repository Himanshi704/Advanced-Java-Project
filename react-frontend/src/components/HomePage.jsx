import React, { Component } from "react";

export default class HomePage extends Component {
  admin() {
    // window.location = "/login";
    this.props.history.push("/login");
  }
  user() {
    //window.location = "/userbuslist";
    this.props.history.push("/userbuslist");
  }
  render() {
    return (
      <div className="text-center">
        <form>
          <div className=" column text-center  ">
            <button className="btn btn-success" onClick={this.admin}>
              Admin Login
            </button>
            <button
              className="btn btn-danger"
              onClick={this.user}
              style={{ marginLeft: "10px" }}
            >
              User Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
