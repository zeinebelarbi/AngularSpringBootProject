package com.ads.SportShop.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="products")
@Data
@NoArgsConstructor

public class Product {
	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="product_id")
	  private Long id;
	  @Column(name="name")
	  private String name;
	  @Column(name="price")
	  private double price;
	  @Column(name="category")
	   private String category;
	  public Product(Long id,String name,double price,String category) {
		    this.id=id;
		    this.name=name;
		    this.price=price;
		    this.category=category;
		  }

}
