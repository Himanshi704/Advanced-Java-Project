import React, { Component } from "react";
import PaymentService from "../services/PaymentService";

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      card_number: "",
      expiration_date: "",
      cvv: "",
    };
    this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
    this.changeExpirationDateHandler =
      this.changeExpirationDateHandler.bind(this);
    this.changeCVVHandler = this.changeCVVHandler.bind(this);
    this.confirm = this.confirm.bind(this);
  }
  confirm(e) {
    if (this.state.card_number === "") {
      document.getElementById("card_number").innerHTML =
        " ** Please fill the required fields ";
      return;
    }
    if (isNaN(this.state.card_number)) {
      document.getElementById("card_number").innerHTML =
        " ** User must write digits only not characters ";
      return;
    }
    if (this.state.card_number.length !== 16) {
      document.getElementById("card_number").innerHTML =
        " ** Enter valid card number ";
      return;
    }
    if (isNaN(this.state.expiration_date)) {
      document.getElementById("expiration_date").innerHTML =
        " ** User must write digits only not characters ";
      return;
    }
    if (this.state.expiration_date === "") {
      document.getElementById(" expiration_date").innerHTML =
        " ** Please fill the required fields ";
      return;
    }
    /*if (
      this.state.expiration_date.length != 5 ||
      this.state.expiration_date != "/"
    ) {
      document.getElementById(" expiration_date").innerHTML =
        " ** Enter correct Details ";
      return;
    }*/

    if (isNaN(this.state.cvv)) {
      document.getElementById("cvv").innerHTML =
        " ** User must write digits only not characters ";
      return;
    }
    if (this.state.cvv.length !== 3) {
      document.getElementById("cvv").innerHTML = " ** Enter valid CVV";
      return;
    }
    e.preventDefault();
    let payment = {
      card_number: this.state.card_number,
      expiration_date: this.expiration_date,
      cvv: this.state.cvv,
    };
    console.log("payment => " + JSON.stringify(payment));
    PaymentService.proceedPayment(payment).then((res) => {
      this.props.history.push("/receipt");
    });
  }
  changeCardNumberHandler = (e) => {
    this.setState({ card_number: e.target.value });
  };
  changeExpirationDateHandler = (e) => {
    this.setState({ expiration_date: e.target.value });
  };
  changeCVVHandler = (e) => {
    this.setState({ cvv: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
              <div className="text-center mt-3">
                <h3>Payment Details</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      placeholder="####-####-####-####"
                      className="form-control "
                      name="card_number"
                      value={this.state.card_number}
                      onChange={this.changeCardNumberHandler}
                    />
                    <span className="text-danger" id="card_number"></span>
                  </div>
                  <div className="form-group">
                    <label>Expiration Date</label>
                    <input
                      placeholder="MM/YY"
                      className="form-control "
                      name="expiration_date"
                      value={this.state.expiration_date}
                      onChange={this.changeExpirationDateHandler}
                    />
                    <span className="text-danger" id="expiration_date"></span>
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      placeholder="***"
                      className="form-control "
                      name="cvv"
                      value={this.state.cvv}
                      onChange={this.changeCVVHandler}
                    />
                    <span className="text-danger" id="cvv"></span>
                  </div>
                  <div className="text-center">
                    <input
                      type="Submit"
                      value={"Confirm Booking"}
                      className="btn btn-primary"
                      onClick={this.confirm}
                    />
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
