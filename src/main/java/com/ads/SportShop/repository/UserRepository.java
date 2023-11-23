package com.ads.SportShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ads.SportShop.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{

	User findByEmail(String username);

	org.springframework.security.core.userdetails.User save(org.springframework.security.core.userdetails.User newUser);
	

}
