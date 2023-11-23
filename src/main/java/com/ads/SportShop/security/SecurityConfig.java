package com.ads.SportShop.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
	 @Autowired
	 CustomerUsersDetailsService customerUsersDetailsService;
	 @Autowired
	   JwtFilter jwtFilter;
	 protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(customerUsersDetailsService).passwordEncoder(passwordEncoder());
	    }
	 @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	    
	@Bean(name= BeanIds.AUTHENTICATION_MANAGER)
	    public AuthenticationManager authenticationManagerBean() throws Exception {
	        return super.authenticationManagerBean();
	    }
	 protected void configure(HttpSecurity http) throws Exception {
	        http.cors().configurationSource(request -> {
	                    CorsConfiguration config = new CorsConfiguration();
	                    config.setAllowedOrigins(Arrays.asList("http://localhost:4200")); // Angular app's origin
	                    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
	                    config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
	                    return config;
	                })
	                .and()
	                .csrf().disable()
	                .authorizeRequests()
	                .antMatchers("/user/login", "/user/signup", "/user/forgotPassword")
	                .permitAll()
	                .anyRequest()
	                .authenticated()
	                .and().exceptionHandling()
	                .and()
	                .sessionManagement()
	                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	    }

}
