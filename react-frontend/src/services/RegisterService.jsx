import React, { Component } from "react";
import axios from "axios";

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v1/register";

class RegisterService {
  getAllUser() {
    return axios.get(REGISTER_API_BASE_URL);
  }

  addUser(register) {
    return axios.post(REGISTER_API_BASE_URL, register);
  }
}
export default new RegisterService();
