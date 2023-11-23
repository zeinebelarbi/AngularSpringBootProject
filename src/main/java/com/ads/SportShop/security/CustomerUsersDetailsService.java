package com.ads.SportShop.security;

import com.ads.SportShop.entity.User;
import com.ads.SportShop.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;

@Slf4j
@Service
public class CustomerUsersDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Inside loadUserByUsername {}", username);
        User userDetail = userRepository.findByEmail(username);

        if (userDetail != null) {
            return new org.springframework.security.core.userdetails.User(
                    userDetail.getEmail(),
                    userDetail.getPassword(),
                    new ArrayList<>()
            );
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
    }



    public com.ads.SportShop.entity.User getUserDetail() {
        return getUserDetail();
    }

    public User registerNewUser(String email, String password, String firstName, String lastName, String role,
            Date birthdate, String adress, String gender) {
        com.ads.SportShop.entity.User existingUser = userRepository.findByEmail(email);
        if (existingUser != null) {
            return null;
        } else {
            User newUser = new User(firstName, lastName, email, password, role, gender, birthdate, adress, gender);

            User savedUser = userRepository.save(newUser);

            return savedUser;
        }
    }
}
