package com.cdac.springboot.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bus_admin")
public class Bus {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Bus_Name")
	private String bus_name;

	@Column(name = "Source")
	private String source;
	
	@Column(name = "Destination")
	private String destination;
	
	@Column(name="Price")
	private float price;
	
	@Column(name="Total_Seat")
	private int total_seat;
	
	@Column(name="Journey_Date")
	private LocalDate journey_date;
	
	@Column(name="Time")
	private String time;
	
	public Bus() {
		
	}

	public Bus(long id, String busName, String source, String destination, float price, int total_seat,
			LocalDate journey_date, String time) {
		super();
		this.id = id;
		this.bus_name = busName;
		this.source = source;
		this.destination = destination;
		this.price = price;
		this.total_seat = total_seat;
		this.journey_date = journey_date;
		this.time = time;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBus_name() {
		return bus_name;
	}

	public void setBus_name(String bus_name) {
		this.bus_name = bus_name;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getTotal_seat() {
		return total_seat;
	}

	public void setTotal_seat(int total_seat) {
		this.total_seat = total_seat;
	}

	public LocalDate getJourney_date() {
		return journey_date;
	}

	public void setJourney_date(LocalDate journey_date) {
		this.journey_date = journey_date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
}
