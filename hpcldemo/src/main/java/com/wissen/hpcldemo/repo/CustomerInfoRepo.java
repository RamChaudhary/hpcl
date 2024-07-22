package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wissen.hpcldemo.model.Customer;

public interface CustomerInfoRepo extends JpaRepository<Customer, Long>{

}
