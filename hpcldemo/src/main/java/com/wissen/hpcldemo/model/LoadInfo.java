package com.wissen.hpcldemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="LOAD_INFO")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class LoadInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long loadId;
	@Column(name="TRUCK_ID")
	private String trunkId;
	@Column(name="INDENT_ID")
	private Long indentId;
	@Column(name="RECEIPE_ID")
	private Long recipeId;
	@Column(name = "DRIVER_ID")
	private String driverId;
	@Column(name = "CUSTOMER_ID")
	private Long customerId;
}
