package com.ads.SportShop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.SportShop.entity.Role;
import com.ads.SportShop.repository.RoleRepository;
import com.ads.SportShop.service.RoleService;



@Service
public class RoleServiceImpl implements RoleService {
	@Autowired
	private RoleRepository roleRepository;
	public 	Role createNewRole(Role role) {
		return roleRepository.save(role);
	
	}

}
