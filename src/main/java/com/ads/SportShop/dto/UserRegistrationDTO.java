package com.ads.SportShop.dto;
import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.ads.SportShop.entity.User;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class UserRegistrationDTO {
	 @NotBlank(message = "Nom est requis")
	    private String firstname;

	    @NotBlank(message = "Prénom est requis")
	    private String lastname;

	    @Email(message = "Adresse e-mail invalide")
	    @NotBlank(message = "Adresse e-mail est requise")
	    private String email;

	    @NotBlank(message = "Mot de passe est requis")
	    private String password;

	    @NotBlank(message = "La confirmation de Mot de passe est requise")
	    private String passwordrep;
	    
	    @NotBlank(message = "L'Adresse est requise")
	    private String address;
	   
	    @NotBlank(message = "Le genre est requis")
	    private String gender;
	    
	    @NotBlank(message = "La date de naissance est requise")
	
	    private Date birthdate;
	    
}
