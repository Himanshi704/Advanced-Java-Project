package com.cdac.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "bus_user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	
	@Column(name="Full_Name")
	private String full_name;
	
	@Column(name="Phone_No")
	private long phone_no;
	
	@Column(name="Email_Id")
	private String email_id;
	
	@Column(name="Age")
	private int age;
	
	@Column(name="Gender")
	private String gender;
	
	public User() {
		
	}

	public User(long id, String full_name, long phone_no, String email_id, int age, String gender) {
		super();
		this.user_id = id;
		this.full_name = full_name;
		this.phone_no = phone_no;
		this.email_id = email_id;
		this.age = age;
		this.gender = gender;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
}
