package com.cdac.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.springboot.model.Payment;
import com.cdac.springboot.repository.PaymentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PaymentController  {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@GetMapping("/payment")
	public List<Payment> getAllPayment(){
		return paymentRepository.findAll();
	}		
	
	@PostMapping("/payment")
	public Payment proceedPayment(@RequestBody Payment payment) {
		return paymentRepository.save(payment);
	}

}
