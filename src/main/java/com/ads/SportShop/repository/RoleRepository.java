package com.ads.SportShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ads.SportShop.entity.Role;


public interface RoleRepository extends JpaRepository<Role,Long> {

	Role save(Role role);

}
