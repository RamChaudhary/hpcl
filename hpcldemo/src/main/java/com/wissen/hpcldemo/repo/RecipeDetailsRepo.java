package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wissen.hpcldemo.model.RecipeDetails;

public interface RecipeDetailsRepo extends JpaRepository<RecipeDetails, Long>{

}
