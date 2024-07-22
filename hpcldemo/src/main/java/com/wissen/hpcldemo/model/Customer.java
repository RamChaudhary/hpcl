package com.wissen.hpcldemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="CUSTOMER")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class Customer {
	
	@Id
	@Column(name = "CUSTOMER_ID")
	Long customerId;
	@Column(name = "CUSTOMER_NAME")
	String customerName;
	@Column(name = "CUSTOMER_ADDRESS")
	String customerAddress;
}
