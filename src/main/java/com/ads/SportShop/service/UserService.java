package com.ads.SportShop.service;

import com.ads.SportShop.dto.UserRegistrationDTO;
import com.ads.SportShop.entity.User;

public interface UserService {
	User registerNewUser(UserRegistrationDTO registrationDTO);


	User registerNewAdmin(UserRegistrationDTO registrationDTO);
}
