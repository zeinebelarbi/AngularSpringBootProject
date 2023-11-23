package com.ads.SportShop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ads.SportShop.dto.UserRegistrationDTO;
import com.ads.SportShop.entity.User;
import com.ads.SportShop.repository.UserRepository;
import com.ads.SportShop.service.UserService;
@Service
class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerNewUser(UserRegistrationDTO registrationDTO) {
        System.out.println("Registering new user: " + registrationDTO);

    	User newUser = new User();
        newUser.setEmail(registrationDTO.getEmail());
        newUser.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        newUser.setRole("User");
        newUser.setLastname(registrationDTO.getLastname());
        newUser.setFirstname(registrationDTO.getFirstname());
        newUser.setAddress(registrationDTO.getAddress());
        newUser.setGender(registrationDTO.getGender());
        newUser.setBirthdate(registrationDTO.getBirthdate());
        return userRepository.save(newUser);
    }


	 @Override
	    public User registerNewAdmin(UserRegistrationDTO registrationDTO) {
	        User newAdmin = new User();
	        newAdmin.setEmail(registrationDTO.getEmail());
	        newAdmin.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
	        newAdmin.setRole("Admin");
	        newAdmin.setLastname(registrationDTO.getLastname());
	        newAdmin.setFirstname(registrationDTO.getFirstname());
	        newAdmin.setAddress(registrationDTO.getAddress());
	        newAdmin.setGender(registrationDTO.getGender());
	        newAdmin.setBirthdate(registrationDTO.getBirthdate());
	        return userRepository.save(newAdmin);
	    }
}