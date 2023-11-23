package com.ads.SportShop.service;

import java.util.List;

import com.ads.SportShop.dto.ProductDto;
import com.ads.SportShop.dto.ProductFilterDTO;
import com.ads.SportShop.entity.Product;

public interface ProductService {
	 public List<ProductDto> getTrendingProducts();

	public List<ProductDto> getNewProducts();

	public List<ProductDto> getSaleProducts();

	void addProduct(List<ProductDto> productDtoList);
	   void updateProduct(Long productId, ProductDto product);
	    void deleteProduct(Long productId);

	public List<ProductDto> getProductsByCategory(String category);

	public List<ProductDto> filterProducts(ProductFilterDTO filter);

	void addProduct(ProductDto product);

}
