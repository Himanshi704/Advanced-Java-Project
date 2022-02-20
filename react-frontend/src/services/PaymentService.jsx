import React, { Component } from "react";
import axios from "axios";

const PAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/payment";

class PaymentService {
  getAllPayment() {
    return axios.get(PAYMENT_API_BASE_URL);
  }

  proceedPayment(payment) {
    return axios.post(PAYMENT_API_BASE_URL, payment);
  }
}
export default new PaymentService();
