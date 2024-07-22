package com.wissen.hpcldemo.model;

import java.sql.Date;

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
@Table(name="TRUCKINFO")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class TruckInfo {
	
	@Id
	@Column(name="TRUCK_ID")
	String truckId;
	@Column(name="DRIVER_NAME")
	String driverName;
	@Column(name="COMPANY")
	String Company;
	@Column(name="ADDRESS")
	String Address;
	@Column(name="CARD")
	Long card;
	@Column(name = "CARD_STATUS")
	String cardStatus;
	@Column(name = "ENTRY_DATE")
	Date entryDate;
	@Column(name = "EXIT_DATE")
	Date exitDate;

}
