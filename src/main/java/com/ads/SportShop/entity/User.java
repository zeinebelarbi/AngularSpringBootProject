package com.ads.SportShop.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String passwordrep;
    private String role;
    private String firstname;
    private String lastname;
    private Date birthdate;
    private String address;
    private String gender;
    
        public User(String firstName, String lastName,String email, String password,String passwordrep, String role,Date birthdate, String address, String gender) {
            this.email = email;
            this.password = password;
            this.role = role;
            this.firstname = firstName;
            this.lastname = lastName;
            this.birthdate= birthdate;
            this.address=address;
            this.gender=gender;
            
        }
    }



