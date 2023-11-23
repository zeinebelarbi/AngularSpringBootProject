package com.ads.SportShop.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ads.SportShop.dto.UserRegistrationDTO;
import com.ads.SportShop.entity.User;
import com.ads.SportShop.security.CustomerUsersDetailsService;
import com.ads.SportShop.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory; 
@RestController
@RequestMapping("/user")
public class UserController {
	private final UserService userService;
	  private static final Logger log = LoggerFactory.getLogger(UserController.class);
	 @Autowired
	    public UserController(UserService userService) {
	        this.userService = userService;
	    }

	    @PostMapping("/inscription")
	    public ResponseEntity<?> registerNewUser(@RequestBody UserRegistrationDTO registrationDTO) {
	    	   System.out.println("Received registration request: " + registrationDTO);
	    	User newUser = userService.registerNewUser(registrationDTO);
	        System.out.println("New user registered: " + newUser);

	        if (newUser != null) {
	            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Failed to register user", HttpStatus.BAD_REQUEST);
	        }
	    }
	    @PostMapping("/connexion")
	    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UserRegistrationDTO loginDTO) {
	        try {
	            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	            if (authentication.isAuthenticated() && authentication.getPrincipal() instanceof UserDetails) {
	                UserDetails userDetails = (UserDetails) authentication.getPrincipal();

	                Map<String, Object> response = new HashMap<>();
	                response.put("firstname", userDetails.getUsername());

	                log.info("UserDetails: {}", userDetails);
	                log.info("User successfully authenticated.");

	                return ResponseEntity.ok(response);
	            } else {
	                log.warn("User not authenticated.");
	                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	            }
	        } catch (Exception e) {
	            log.error("Error during login: {}", e.getMessage(), e);
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	        }
	    }
}

