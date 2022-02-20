import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      // isLoaded: false,
      // index: 0,
    };
    //this.handleIndex = this.handleIndex.bind(this);
  }

  // handleIndex(event) {
  //   this.setState({ index: event.target.value });
  // }

  // componentDidMount() {
  //   //EmployeeService.getBusById(data);
  //   fetch("http://localhost:8080/api/v1/bus")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       });
  //     });
  // }
  render() {
    var user1 = sessionStorage.getItem("user");
    console.log(Object.values(user1));
    // var user = Object.values(user);
    // for (let i = 0; i < user.length; i++) {
    //   user[i];
    // }

    // var data = sessionStorage.getItem("bus");
    // var { isLoaded, items, index } = this.state;
    // const selected = items[index] || items[0];
    // if (!isLoaded) {
    return (
      <div>
        <div className="text-light text-center ">
          <h1>You Ticket has been book Successfully!!</h1>
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <div className="text-light">
    //       <ul>
    //         <li key={selected.id}>
    //           Name: {selected.bus_name} | Source: {selected.source}
    //           Destination: {selected.destination} | Price: {selected.price}
    //         </li>
    //       </ul>
    //       <input
    //         type="number"
    //         value={data}
    //         onChange={(e) => this.handleIndex(e)}
    //         placeholder="Enter a valid index"
    //       />
    //     </div>
  }
}
