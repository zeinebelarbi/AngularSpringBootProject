package com.ads.SportShop.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ads.SportShop.entity.Product;
public interface ProductRepository extends JpaRepository<Product,Long> {
	  List<Product> findByCategory(String category);
}
