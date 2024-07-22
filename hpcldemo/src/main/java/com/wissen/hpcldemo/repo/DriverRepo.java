package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wissen.hpcldemo.model.Driver;

public interface DriverRepo extends JpaRepository<Driver, String>{

}
