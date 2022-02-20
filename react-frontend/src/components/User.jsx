import React, { Component } from "react";
import UserService from "../services/UserService";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      full_name: "",
      email_id: "",
      phone_no: "",
      age: "",
      gender: "",
    };
    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changeEmailIddHandler = this.changeEmailIdHandler.bind(this);
    this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
  }
  bookticket = (e) => {
    e.preventDefault();

    if (this.state.full_name === "") {
      document.getElementById("full_name").innerHTML =
        " ** Please fill the Name field ";
      return;
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
    if (this.state.phone_no === "") {
      document.getElementById("phone_no").innerHTML =
        " ** Please fill the Mobile Number field ";
      return;
    }
    if (isNaN(this.state.phone_no)) {
      document.getElementById("phone_no").innerHTML =
        " ** User must write digits only not characters ";
      return;
    }
    if (this.state.phone_no.length !== 10) {
      document.getElementById("phone_no").innerHTML =
        " ** Mobile number must be 10 digits only ";
      return;
    }
    if (this.state.age === "") {
      document.getElementById("age").innerHTML = " ** Age should not be blank ";
      return;
    }
    if (isNaN(this.state.age) || this.state.age < 1 || this.state.age > 100) {
      document.getElementById("age").innerHTML =
        "**The age must be a number between 1 and 100";
      return;
    }
    if (this.state.gender === "") {
      document.getElementById("gender").innerHTML =
        " ** Please fill the Name field ";
      return;
    }
    /*if (this.state.gender !== "Male") {
      document.getElementById("gender").innerHTML = "**Enter valid Gender ";
      return;
    }*/

    let user = {
      full_name: this.state.full_name,
      email_id: this.state.email_id,
      phone_no: this.state.phone_no,
      age: this.state.age,
      gender: this.state.gender,
    };
    sessionStorage.setItem("user", user);
    console.log("register => " + JSON.stringify(user));
    UserService.addUser(user).then((res) => {
      this.props.history.push("/payment");
    });
  };
  cancel() {
    this.props.history.push("/bus");
  }
  changeFullNameHandler = (e) => {
    this.setState({ full_name: e.target.value });
  };
  changeEmailIdHandler = (e) => {
    this.setState({ email_id: e.target.value });
  };
  changePhoneNoHandler = (e) => {
    this.setState({ phone_no: e.target.value });
  };
  changeAgeHandler = (e) => {
    this.setState({ age: e.target.value });
  };
  changeGenderHandler = (e) => {
    this.setState({ gender: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
              <div className="text-center mt-2">
                <h3>Passenger Details</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Enter Your Full Name</label>
                    <input
                      placeholder="Full Name"
                      className="form-control "
                      name="full_name"
                      value={this.state.full_name}
                      onChange={this.changeFullNameHandler}
                    />
                    <span className="text-danger" id="full_name"></span>
                  </div>
                  <div className="form-group">
                    <label>Enter Your Email Id</label>
                    <input
                      placeholder="Email Id"
                      className="form-control "
                      name="email_id"
                      value={this.state.email_id}
                      onChange={this.changeEmailIdHandler}
                    />
                    <span className="text-danger" id="email_id"></span>
                  </div>
                  <div className="form-group">
                    <label>Enter Your Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      name="phone_no"
                      className="form-control "
                      value={this.state.phone_no}
                      onChange={this.changePhoneNoHandler}
                    />
                    <span className="text-danger" id="phone_no"></span>
                  </div>
                  <div className="form-group">
                    <label>Enter Your Age</label>
                    <input
                      placeholder="Age"
                      className="form-control "
                      name="age"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                    <span className="text-danger" id="age"></span>
                  </div>
                  <div className="form-group">
                    <label>Enter Your Gender</label>
                    <input
                      placeholder="Gender"
                      name="gender"
                      className="form-control "
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    />
                    <span className="text-danger" id="gender"></span>
                  </div>
                  <div className=" text-center ">
                    <input
                      type="Submit"
                      value={"Proceed to Payment"}
                      className="btn btn-primary "
                      onClick={this.bookticket.bind(this)}
                    />
                    <button
                      className="btn btn-danger  "
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
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
