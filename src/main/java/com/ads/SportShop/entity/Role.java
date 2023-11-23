package com.ads.SportShop.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Entity
public class Role {
	 @Id
	  private String roleName;

	    private String roleDescription;

}
