package com.cdac.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.springboot.model.Login;



public interface LoginRepository extends JpaRepository<Login, Long>{

}
