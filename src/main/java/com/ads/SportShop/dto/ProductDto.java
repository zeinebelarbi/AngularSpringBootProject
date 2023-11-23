package com.ads.SportShop.dto;
import com.ads.SportShop.entity.Product;

import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
public class ProductDto {
	Long id;
	String name;
	double price;
	 private String category;
	public ProductDto(Product product ) {
	   id=product.getId();
	    name=product.getName();
	    price=product.getPrice();
	    category=product.getCategory();
	  }
	public Product convert() {
		Product product=new Product();
		product.setId(id);
		product.setName(name);
		product.setPrice(price);
		product.setCategory(category);
	    return product;
	  }
	public String getColor() {

		return null;
	}
	public String getPriceRange() {

		return null;
	}
}
