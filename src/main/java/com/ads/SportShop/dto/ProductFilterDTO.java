package com.ads.SportShop.dto;

import java.util.Map;

import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
public class ProductFilterDTO {
	 private Map<String, Boolean> productType;
	    private Map<String, Boolean> productColor;
	    private Map<String, Boolean> productPrice;

}
