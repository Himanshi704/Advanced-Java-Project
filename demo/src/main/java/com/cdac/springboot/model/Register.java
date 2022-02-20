package com.cdac.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_login")
public class Register {
	
	@Id
	@GeneratedValue
	private long user_login_id;
	
	@Column(name="Username")
	private String user_username;
	
	@Column(name="Email_Id")
	private String user_emailid;
	
	@Column(name="Password")
	private String user_password;
	
	public Register() {
		
	}

	public Register(long user_login_id, String user_username, String user_emailid, String user_password) {
		super();
		this.user_login_id = user_login_id;
		this.user_username = user_username;
		this.user_emailid = user_emailid;
		this.user_password = user_password;
	}

	public long getUser_login_id() {
		return user_login_id;
	}

	public void setUser_login_id(long user_login_id) {
		this.user_login_id = user_login_id;
	}

	public String getUser_username() {
		return user_username;
	}

	public void setUser_username(String user_username) {
		this.user_username = user_username;
	}

	public String getUser_emailid() {
		return user_emailid;
	}

	public void setUser_emailid(String user_emailid) {
		this.user_emailid = user_emailid;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
}
