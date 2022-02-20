import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bus: [],
    };
    this.addBus = this.addBus.bind(this);
    this.editBus = this.editBus.bind(this);
    this.deleteBus = this.deleteBus.bind(this);
  }

  deleteBus(id) {
    EmployeeService.deleteBus(id).then((res) => {
      this.setState({
        bus: this.state.bus.filter((bus) => bus.id !== id),
      });
    });
  }
  viewBus(id) {
    //sessionStorage.setItem("bus", { id });
    this.props.history.push(`/view-bus/${id}`);
  }
  editBus(id) {
    this.props.history.push(`/add-bus/${id}`);
  }

  componentDidMount() {
    EmployeeService.getAllBus().then((res) => {
      this.setState({ bus: res.data });
    });
  }

  addBus() {
    window.location = "add-bus";
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-light ">Bus List</h2>
        <div className="row"></div>
        <br></br>
        <div className="tabledata container">
          <div className=" row">
            <table className=" table table-striped table-bordered ">
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
                    <td>{buses.bus_name}</td>
                    <td>{buses.source}</td>
                    <td>{buses.destination}</td>
                    <td>{buses.journey_date}</td>
                    <td>{buses.time}</td>
                    <td>{buses.price}</td>
                    <td>{buses.total_seat}</td>
                    <td>
                      <button
                        onClick={() => this.editBus(buses.id)}
                        className="btn btn-primary"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteBus(buses.id)}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewBus(buses.id)}
                        className="btn btn-primary"
                      >
                        View{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-3  " onClick={this.addBus}>
            Add Bus
          </button>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
