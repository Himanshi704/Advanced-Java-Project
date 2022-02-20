package com.cdac.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.springboot.model.Bus;
import com.cdac.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
