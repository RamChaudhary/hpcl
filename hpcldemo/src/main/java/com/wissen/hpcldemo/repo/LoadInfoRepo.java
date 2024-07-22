package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wissen.hpcldemo.model.LoadInfo;

public interface LoadInfoRepo extends JpaRepository<LoadInfo, Long>{

}
