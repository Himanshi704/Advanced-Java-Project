import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class UserBusList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bus: [],
    };
    this.bookTicket = this.bookTicket.bind(this);
  }
  componentDidMount() {
    EmployeeService.getAllBus().then((res) => {
      this.setState({ bus: res.data });
    });
  }

  bookTicket(id) {
    //this.props.history.push(`/register/${id}`);
    sessionStorage.setItem("bus", id);
    this.props.history.push("/register");
  }

  render() {
    return (
      <div className="">
        <h2 className="text-center text-light">Welcome to CDAC Travels</h2>
        <div className="row"></div>
        <br></br>
        <div className="tabledata container">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Bus Name </th>
                  <th>Source </th>
                  <th>Destination </th>
                  <th>Journey date </th>
                  <th>Time </th>
                  <th>Price </th>
                  <th>Total Seat</th>
                  <th>Actions </th>
                </tr>
              </thead>
              <tbody>
                {this.state.bus.map((buses) => (
                  <tr key={buses.id}>
                    <td>{buses.bus_name} </td>
                    <td>{buses.source}</td>
                    <td>{buses.destination}</td>
                    <td>{buses.journey_date}</td>
                    <td>{buses.time}</td>
                    <td>{buses.price}</td>
                    <td>{buses.total_seat}</td>
                    <td>
                      <button
                        onClick={() => this.bookTicket(buses.id)}
                        className="btn btn-primary"
                      >
                        Book Ticket
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
