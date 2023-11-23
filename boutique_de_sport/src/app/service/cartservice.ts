import { Injectable } from '@angular/core';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  getCartItemCount(): number {
    return this.cartItems.length;
  }
  private cartItems: any[] = [];
  constructor() { }
  addToCart(productsToAdd: Product[]) {
    this.cartItems.push(...productsToAdd); 
    console.log('Contenu du panier après ajout :', this.cartItems);
    console.log('Tailles du produit ajouté :', productsToAdd[0].sizes);
    console.log('Couleurs du produit ajouté :', productsToAdd[0].colors);
  }
  
  getCartItems() : any[] {
    return this.cartItems; 
  }
  setCartItems(items: any[]) {
    this.cartItems = items;
  }
  clearCart() {
    this.cartItems = []; 
  }
}
