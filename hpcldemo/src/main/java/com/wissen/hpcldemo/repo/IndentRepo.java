package com.wissen.hpcldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wissen.hpcldemo.model.Indent;

public interface IndentRepo extends JpaRepository<Indent, Long>{

}