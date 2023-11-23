package com.ads.SportShop.service.impl;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.SportShop.dto.ProductDto;
import com.ads.SportShop.dto.ProductFilterDTO;
import com.ads.SportShop.entity.Product;
import com.ads.SportShop.repository.ProductRepository;
import com.ads.SportShop.service.ProductService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService  {
    @Autowired
    private ProductRepository productRepository;

    @Override
	public List<ProductDto> getTrendingProducts() {
        List<Product> products = productRepository.findByCategory("Tendances");
        return products.stream()
            .map(product -> new ProductDto(product))
            .collect(Collectors.toList());
    }
    @Override
	public List<ProductDto> getNewProducts() {
        List<Product> products = productRepository.findByCategory("Nouveautés");
        return products.stream()
            .map(product -> new ProductDto(product))
            .collect(Collectors.toList());
    }
    @Override
	public List<ProductDto> getSaleProducts() {
        List<Product> products = productRepository.findByCategory("Articles soldés");
        return products.stream()
            .map(product -> new ProductDto(product))
            .collect(Collectors.toList());
    }
	@Override
	public void addProduct(ProductDto product) {
	log.info(product.toString());
	Product	p =product.convert();
	productRepository.save(p);
	}
	@Override
	public List<ProductDto> getProductsByCategory(String category) {
		List<Product> products = productRepository.findByCategory(category);
        return products.stream()
                .map(product -> new ProductDto(product))
                .collect(Collectors.toList());
    }
	@Override
	public List<ProductDto> filterProducts(ProductFilterDTO filter) {

		  List<ProductDto> allProducts = getAllProducts();

		List<ProductDto> filteredProducts = allProducts.stream()
		            .filter(product -> filterProductByType(product, filter.getProductType()))
		            .filter(product -> filterProductByColor(product, filter.getProductColor()))
		            .filter(product -> filterProductByPrice(product, filter.getProductPrice()))
		            .collect(Collectors.toList());

		        return filteredProducts;
	}
	  private List<ProductDto> getAllProducts() {

	        List<Product> productsFromDatabase = productRepository.findAll();
	        return productsFromDatabase.stream()
	            .map(product -> new ProductDto(product))
	            .collect(Collectors.toList());
	    }
	private boolean filterProductByType(ProductDto product, Map<String, Boolean>  typeFilter) {
		 if (typeFilter.isEmpty()) {
	            return true;
	        }
		  for (Map.Entry<String, Boolean> entry : typeFilter.entrySet()) {
	            if (entry.getValue() && productMatchesType(product, entry.getKey())) {
	                return true;
	            }
	        }

	        return false;
	    }
	 private boolean productMatchesType(ProductDto product, String type) {

	        return product.getCategory().equalsIgnoreCase(type);
	    }

	    private boolean filterProductByColor(ProductDto product, Map<String, Boolean> colorFilter) {
	        if (colorFilter.isEmpty()) {

	            return true;
	        }


	        for (Map.Entry<String, Boolean> entry : colorFilter.entrySet()) {
	            if (entry.getValue() && productMatchesColor(product, entry.getKey())) {
	                return true;
	            }
	        }

	        return false;
	    }


	    private boolean productMatchesColor(ProductDto product, String color) {

	        return product.getColor().equalsIgnoreCase(color);
	    }

	    private boolean filterProductByPrice(ProductDto product, Map<String, Boolean> priceFilter) {
	        if (priceFilter.isEmpty()) {

	            return true;
	        }


	        for (Map.Entry<String, Boolean> entry : priceFilter.entrySet()) {
	            if (entry.getValue() && productMatchesPrice(product, entry.getKey())) {
	                return true;
	            }
	        }

	        return false;
	    }


	    private boolean productMatchesPrice(ProductDto product, String priceRange) {

	        return product.getPriceRange().equalsIgnoreCase(priceRange);
	    }
		@Override
		public void updateProduct(Long productId, ProductDto product) {
			  Product existingProduct = productRepository.findById(productId)
			            .orElseThrow(() -> new EntityNotFoundException("Product not found"));
			        Product updatedProduct = product.convert();
			        updatedProduct.setId(productId);
			        productRepository.save(updatedProduct);
			
		}
		@Override
		public void deleteProduct(Long productId) {
			 productRepository.deleteById(productId);
			
		}
		@Override
		public void addProduct(List<ProductDto> productDtoList) {
			// TODO Auto-generated method stub
			
		}
	}







