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
@Table(name="RECIPE_DETAILS")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class RecipeDetails {
	@Id
	@Column(name="RECEIPE_ID")
	private Long recipeId;
	@Column(name = "FUEL")
	private String fuel;
	@Column(name = "BLENDER")
	private String blender;
	@Column(name = "ADDITIVE")
	private String Additive;

}
