import React, { Component } from "react";
import RegisterService from "../services/RegisterService";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      username: "",
      email_id: "",
      password: "",
    };
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.register = this.register.bind(this);
  }
  register = (e) => {
    e.preventDefault();
    if (this.state.username == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the Username field ";
      return false;
    }
    if (this.state.username.length <= 2 || this.state.username.length > 10) {
      document.getElementById("username").innerHTML =
        " ** Username length must be between 2 and 10 ";
      return false;
    }
    if (!isNaN(this.state.username)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }
    if (this.state.email_id === "") {
      document.getElementById("email_id").innerHTML =
        " ** Please fill the Name field ";
      return;
    }
    if (this.state.email_id.indexOf("@") <= 0) {
      document.getElementById("email_id").innerHTML = " ** Invalid @ position ";
      return;
    }
    if (
      this.state.email_id.charAt(this.state.email_id.length - 4) != "." &&
      this.state.email_id.charAt(this.state.email_id.length - 3) != "."
    ) {
      document.getElementById("email_id").innerHTML = " ** Invalid . position ";
      return;
    }

    if (this.state.password == "") {
      document.getElementById("password").innerHTML =
        " ** Please fill the Password field ";
      return false;
    }
    if (this.state.password.length <= 8 || this.state.password.length > 20) {
      document.getElementById("password").innerHTML =
        " ** Password length must be between 8 and 20 ";
      return false;
    }
    let register = {
      email_id: this.state.email_id,
      password: this.state.password,
      username: this.state.username,
    };
    //console.log("register => " + JSON.stringify(register));
    RegisterService.addUser(register).then((res) => {
      this.props.history.push("/user");
    });
  };
  /* componentDidMount() {
    RegisterService.addUser(register).then((res) => {
      this.props.history.push("/user");
    });
  }*/
  changeUserNameHandler = (e) => {
    this.setState({ username: e.target.value });
  };
  changeEmailIdHandler = (e) => {
    this.setState({ email_id: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className="container ">
        <div className="row ">
          <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
            <div className="text-center mt-2">
              <h3>Register Now</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Enter Your Username</label>
                  <input
                    placeholder="Username"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.changeUserNameHandler}
                  />
                  <span className="text-danger" id="username" />
                </div>
                <div className="form-group">
                  <label>Enter Your Email Id</label>
                  <input
                    placeholder="Email Id"
                    name="email_id"
                    className="form-control "
                    value={this.state.email_id}
                    onChange={this.changeEmailIdHandler}
                  />
                  <span className="text-danger" id="email_id" />
                </div>
                <div className="form-group">
                  <label>Enter Your Password</label>
                  <input
                    placeholder="Password"
                    name="password"
                    className="form-control "
                    value={this.state.password}
                    onChange={this.changePasswordHandler}
                  />
                  <span className="text-danger" id="password" />
                </div>
                <div className="text-center">
                  <input
                    type="Submit"
                    value={"Register"}
                    onClick={this.register}
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
