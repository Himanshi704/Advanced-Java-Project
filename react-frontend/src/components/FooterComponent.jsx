import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="mt-3">
            <p>&copy; All Rights Reserved 2022 Bus.com</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
