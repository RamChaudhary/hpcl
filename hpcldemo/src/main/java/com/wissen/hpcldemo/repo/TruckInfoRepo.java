package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wissen.hpcldemo.model.TruckInfo;

public interface TruckInfoRepo extends JpaRepository<TruckInfo, String>{

}
