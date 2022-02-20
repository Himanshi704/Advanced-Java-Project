package com.cdac.springboot.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long card_id;
	
	@Column(name="Card_Number")
	private String card_number;
	
	@Column(name="Expiration_Date")
	private String date;
	
	@Column(name="cvv")
	private int cvv;
	
	public Payment() {
		
	}

	public Payment(long card_id, String card_number, String date, int cvv) {
		super();
		this.card_id = card_id;
		this.card_number = card_number;
		this.date = date;
		this.cvv = cvv;
	}

	public long getCard_id() {
		return card_id;
	}

	public void setCard_id(long card_id) {
		this.card_id = card_id;
	}

	public String getCard_number() {
		return card_number;
	}

	public void setCard_number(String card_number) {
		this.card_number = card_number;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	
	
	
	

}
