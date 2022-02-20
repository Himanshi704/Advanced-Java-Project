package com.cdac.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.springboot.model.Register;
import com.cdac.springboot.model.User;
import com.cdac.springboot.repository.RegisterRepository;
import com.cdac.springboot.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RegisterController {
	
	@Autowired
	private RegisterRepository registerRepository;
	
	@GetMapping("/register")
	public List<Register> getAllUser(){
		return registerRepository.findAll();
	}		
	
	@PostMapping("/register")
	public Register addUser(@RequestBody Register register) {
		return registerRepository.save(register);
	}
}
