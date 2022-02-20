import React, { Component } from "react";
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService {
  getAllUser() {
    return axios.get(USER_API_BASE_URL);
  }

  addUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }
}
export default new UserService();
