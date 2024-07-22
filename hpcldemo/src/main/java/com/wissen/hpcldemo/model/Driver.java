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
@Table(name="DRIVER")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class Driver {
	
	@Id
	@Column(name = "DRIVER_ID")
	private String driverId;
	@Column(name = "DRIVER_NAME")
	private String driverName;
	@Column(name = "DRIVER_ADDRESS")
	private String Address;

}
