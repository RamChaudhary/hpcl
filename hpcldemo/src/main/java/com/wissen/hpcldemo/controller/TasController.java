package com.wissen.hpcldemo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wissen.hpcldemo.model.Customer;
import com.wissen.hpcldemo.model.Driver;
import com.wissen.hpcldemo.model.Indent;
import com.wissen.hpcldemo.model.LoadInfo;
import com.wissen.hpcldemo.model.RecipeDetails;
import com.wissen.hpcldemo.model.TruckInfo;
import com.wissen.hpcldemo.repo.CustomerInfoRepo;
import com.wissen.hpcldemo.repo.DriverRepo;
import com.wissen.hpcldemo.repo.IndentRepo;
import com.wissen.hpcldemo.repo.LoadInfoRepo;
import com.wissen.hpcldemo.repo.RecipeDetailsRepo;
import com.wissen.hpcldemo.repo.TruckInfoRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TasController {
	
	@Autowired
	TruckInfoRepo truckRepo;
	
	@Autowired
	CustomerInfoRepo customerRepo;
	
	@Autowired
	DriverRepo driverRepo;
	
	@Autowired
	RecipeDetailsRepo recipeRepo;
	@Autowired
	IndentRepo indentRepo;
	
	@Autowired
	LoadInfoRepo loadRepo;

	@GetMapping("welcome")
	public String welcome() {
		return "Hi Welcome";
	}
	
	@GetMapping("/getAllTrunkInfo")
	public List<TruckInfo> getAllTruckInfos(){
		return truckRepo.findAll(); 
	}
	
	@GetMapping("/getAllCustomers")
	public List<Customer> getCustomerInfos(){
		return customerRepo.findAll(); 
	}
	
	@GetMapping("/getCustomer/{id}")
	public Customer getCustomer(@PathVariable String id){
		Optional<Customer> cus = customerRepo.findById(Long.parseLong(id));
		return cus.isEmpty() ? null : cus.get(); 
	}
	
	@GetMapping("/getTruck/{id}")
	public TruckInfo getTruck(@PathVariable String id){
		System.out.println("id::"+id);
		Optional<TruckInfo> truck = truckRepo.findById(id);
		if(!truck.isEmpty()) {
			System.out.println("truck.get()::"+truck.get());
		}
		return truck.isEmpty() ? null : truck.get(); 
	}
	
	@GetMapping("/getDriver/{id}")
	public Driver getDriver(@PathVariable String id){
		System.out.println("id::"+id);
		Optional<Driver> driver = driverRepo.findById(id);
		if(!driver.isEmpty()) {
			System.out.println("truck.get()::"+driver.get());
		}
		return driver.isEmpty() ? null : driver.get(); 
	}
	
	@PostMapping("/AddRecipeDetails")
	public RecipeDetails addRecipeDetails(@RequestBody RecipeDetails recipe) {
		return recipeRepo.save(recipe);
	}
	
	@GetMapping("/getAllRecipeDetails")
	public List<RecipeDetails> getAllRecipeDetails(){
		return recipeRepo.findAll(); 
	}
	
	@PostMapping("/AddIndent")
	public Indent addIndent(@RequestBody Indent indent) {
		return indentRepo.save(indent);
	}
	
	@GetMapping("/getAllIndentInfo")
	public List<Indent> getAllIndentInfo(){
		return indentRepo.findAll(); 
	}
	
	@PostMapping("/AddLoadInfo")
	public LoadInfo addIndent(@RequestBody LoadInfo load) {
		return loadRepo.save(load);
	}
}
