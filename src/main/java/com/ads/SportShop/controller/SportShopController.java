package com.ads.SportShop.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ads.SportShop.dto.ProductDto;
import com.ads.SportShop.dto.ProductFilterDTO;
import com.ads.SportShop.entity.Product;
import com.ads.SportShop.service.ProductService;
@RestController
@RequestMapping("/rest/products")
public class SportShopController {
	 @Autowired
	    private ProductService productService;

	    @GetMapping("/tendances")
	    public List<ProductDto> getTrendingProducts() {
	        return productService.getTrendingProducts();
	    }
	    @GetMapping("/nouveautes")
	    public List<ProductDto> getNewProducts() {
	        return productService.getNewProducts();
	    }
	    @GetMapping("/articles-soldes")
	    public List<ProductDto> getSaleProducts() {
	        return productService.getSaleProducts();
	    }
	    @PostMapping(value="/add")
	    public ResponseEntity<String> addProduct(@RequestBody List<ProductDto> productDtoList) {
	    	 productService.addProduct(productDtoList);
	      return ResponseEntity.ok("Produits ajoutés avec succès");
	    }
	    @PutMapping(value = "/update/{productId}")
	    public ResponseEntity<String> updateProduct(
	        @PathVariable Long productId, @RequestBody ProductDto productDto) {
	        productService.updateProduct(productId, productDto);
	        return ResponseEntity.ok("Produits modifiés avec succès");
	    }

	    @DeleteMapping(value = "/delete/{productId}")
	    public ResponseEntity<String> deleteProduct(@PathVariable Long productId) {
	        productService.deleteProduct(productId);
	        return ResponseEntity.ok("Produits modifiés avec succès");
	    }
	    
	    @GetMapping("/category")
	    public List<ProductDto> getProductsByCategory(@RequestParam("category") String category) {
	        return productService.getProductsByCategory(category);
	    }


	    @PostMapping("/filter")
	    public List<ProductDto> filterProducts(@RequestBody ProductFilterDTO filter) {
	    	 System.out.println("Filter: " + filter.toString());
	    	    List<ProductDto> filteredProducts = productService.filterProducts(filter);
	    	    System.out.println("Filtered Products: " + filteredProducts.size());

	    	    return filteredProducts;
	    }

}
