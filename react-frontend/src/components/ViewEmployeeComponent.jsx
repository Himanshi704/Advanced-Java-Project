import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      bus: {},
    };
  }

  componentDidMount() {
    EmployeeService.getBusById(this.state.id).then((res) => {
      this.setState({ bus: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Bus Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Bus Name: </label>
              <div> {this.state.bus.bus_name}</div>
            </div>
            <div className="row">
              <label> Source : </label>
              <div> {this.state.bus.source}</div>
            </div>
            <div className="row">
              <label> Destination : </label>
              <div> {this.state.bus.destination}</div>
            </div>
            <div className="row">
              <label> Journey Date : </label>
              <div> {this.state.bus.journey_date}</div>
            </div>
            <div className="row">
              <label> Time : </label>
              <div> {this.state.bus.time}</div>
            </div>
            <div className="row">
              <label> Price : </label>
              <div> {this.state.bus.price}</div>
            </div>
            <div className="row">
              <label> Total Seat : </label>
              <div> {this.state.bus.total_seat}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
