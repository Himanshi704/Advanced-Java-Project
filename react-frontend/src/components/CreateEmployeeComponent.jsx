import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      bus_name: "",
      source: "",
      destination: "",
      journey_date: "",
      time: "",
      price: "",
      total_seat: "",
    };
    this.changeBusNameHandler = this.changeBusNameHandler.bind(this);
    this.changeSourceHandler = this.changeSourceHandler.bind(this);
    this.changeJourneyDateHandler = this.changeJourneyDateHandler.bind(this);
    this.changeTimeHandler = this.changeTimeHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeTotalSeatHandler = this.changeTotalSeatHandler.bind(this);
    this.save = this.save.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeeService.getBusById(this.state.id).then((res) => {
        let bus = res.data;
        this.setState({
          bus_name: bus.bus_name,
          source: bus.source,
          destination: bus.destination,
          journey_date: bus.journey_date,
          time: bus.time,
          price: bus.price,
          total_seat: bus.total_seat,
        });
      });
    }
  }

  save = (e) => {
    e.preventDefault();
    let bus = {
      bus_name: this.state.bus_name,
      source: this.state.source,
      destination: this.state.destination,
      journey_date: this.state.journey_date,
      time: this.state.time,
      price: this.state.price,
      total_seat: this.state.total_seat,
    };
    console.log("bus => " + JSON.stringify(bus));
    //alert(JSON.stringify(bus.data));

    // step 5
    if (this.state.id === "_add") {
      EmployeeService.addBus(bus).then((res) => {
        this.props.history.push("/bus");
      });
    } else {
      EmployeeService.updateBus(bus, this.state.id).then((res) => {
        this.props.history.push("/bus");
      });
    }
  };

  changeBusNameHandler = (e) => {
    this.setState({ bus_name: e.target.value });
  };
  changeSourceHandler = (e) => {
    this.setState({ source: e.target.value });
  };
  changeDestinationHandler = (e) => {
    this.setState({ destination: e.target.value });
  };
  changeJourneyDateHandler = (e) => {
    this.setState({ journey_date: e.target.value });
  };
  changeTimeHandler = (e) => {
    this.setState({ time: e.target.value });
  };
  changePriceHandler = (e) => {
    this.setState({ price: e.target.value });
  };
  changeTotalSeatHandler = (e) => {
    this.setState({ total_seat: e.target.value });
  };

  cancel() {
    this.props.history.push("/bus");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center mt-3">Add Bus</h3>;
    } else {
      return <h3 className="text-center mt-3">Update Bus</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Bus Name</label>
                    <input
                      placeholder="Bus Name"
                      name="bus_name"
                      className="form-control"
                      value={this.state.bus_name}
                      onChange={this.changeBusNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Source</label>
                    <input
                      placeholder="Source"
                      name="source"
                      className="form-control"
                      value={this.state.source}
                      onChange={this.changeSourceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Destination</label>
                    <input
                      placeholder="Destination"
                      name="destination"
                      className="form-control"
                      value={this.state.destination}
                      onChange={this.changeDestinationHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Journey Date</label>
                    <input
                      placeholder="Journey Date"
                      name="journey_date"
                      className="form-control"
                      value={this.state.journey_date}
                      onChange={this.changeJourneyDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      placeholder="Time"
                      name="time"
                      className="form-control"
                      value={this.state.time}
                      onChange={this.changeTimeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      placeholder="Price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Seat</label>
                    <input
                      placeholder="Total Seat"
                      name="total_seat"
                      className="form-control"
                      value={this.state.total_seat}
                      onChange={this.changeTotalSeatHandler}
                    />
                  </div>
                  <div
                    className=" column text-center  "
                    style={{ marginTop: "10px" }}
                  >
                    <button className="btn btn-success" onClick={this.save}>
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
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

export default CreateEmployeeComponent;
