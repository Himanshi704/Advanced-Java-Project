package com.cdac.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.springboot.model.Register;
import com.cdac.springboot.model.User;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long>{

}
