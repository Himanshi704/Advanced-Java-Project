package com.cdac.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.springboot.model.Bus;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long>{

}

