package com.cdac.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.springboot.exception.ResourceNotFoundException;
import com.cdac.springboot.model.Bus;
import com.cdac.springboot.repository.BusRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BusController {

	@Autowired
	private BusRepository busRepository;
	
	// get all employees
	@GetMapping("/bus")
	public List<Bus> getAllBus(){
		return busRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/bus")
	public Bus addBus(@RequestBody Bus bus) {
		return busRepository.save(bus);
	}
	
	// get employee by id rest api
	@GetMapping("/bus/{id}")
	public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
		Bus bus = busRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not exist with id :" + id));
		return ResponseEntity.ok(bus);
	}
	
	// update employee rest api
	
	@PutMapping("/bus/{id}")
	public ResponseEntity<Bus> updateBus(@PathVariable Long id, @RequestBody Bus busDetails){
		Bus bus = busRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not exist with id :" + id));
		
		bus.setBus_name(busDetails.getBus_name());
		bus.setSource(busDetails.getSource());
		bus.setDestination(busDetails.getDestination());
		bus.setJourney_date(busDetails.getJourney_date());
		bus.setTime(busDetails.getTime());
		bus.setPrice(busDetails.getPrice());
		bus.setTotal_seat(busDetails.getTotal_seat());
		
		Bus updatedBus = busRepository.save(bus);
		return ResponseEntity.ok(updatedBus);
	}
	
	// delete employee rest api
	@DeleteMapping("/bus/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBus(@PathVariable Long id){
		Bus bus = busRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not exist with id :" + id));
		
		busRepository.delete(bus);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
