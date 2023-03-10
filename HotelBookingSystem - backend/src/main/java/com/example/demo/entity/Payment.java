package com.example.demo.entity;

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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="payment_id")
	private int paymentId;
	@Column(name="user_id")
	private int userId;
	@Column(name="user_name")
	private String userName;
	@Column(name="user_email")
	private String userEmail;
	@Column(name="user_phno")
	private String userPhno;
	@Column(name="user_address")
	private String userAddress;
	@Column(name="price")
	private String price;
	
	
	public Payment() {
		
	}


	public Payment(int paymentId, int userId, String userName, String userEmail, String userPhno, String userAddress, String price) {
		
		this.paymentId = paymentId;
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPhno = userPhno;
		this.userAddress = userAddress;
		this.price = price;
	}


	public int getPaymentId() {
		return paymentId;
	}


	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getUserPhno() {
		return userPhno;
	}


	public void setUserPhno(String userPhno) {
		this.userPhno = userPhno;
	}


	public String getUserAddress() {
		return userAddress;
	}


	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", userId=" + userId + ", userName=" + userName + ", userEmail="
				+ userEmail + ", userPhno=" + userPhno + ", userAddress=" + userAddress + "]";
	}
	
	
	
	
	

}
