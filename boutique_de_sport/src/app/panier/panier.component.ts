import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductService } from 'src/app/service/productservice';
import { CartService } from 'src/app/service/cartservice';
import { Product, Color, Size } from '../entity/product';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [MessageService]
})
export class PanierComponent implements OnInit {
 
  commandeReussie = false;
  msg: Message[] = [];
  cartItems: Product[] = [];
  cartItemCount: number = 0;
  selectedLanguage: any;
  items!: MenuItem[];
  activeItem: MenuItem | undefined;
  responsiveOptions: any[] | undefined;
  langueOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.msg = [{ severity: 'success', detail: 'Votre commande a été passée avec succès!' }];
    this.primengConfig.ripple = true;
    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartItems.length; 
  }

  removeFromCart(product: any) {
    const productIndex = this.cartItems.indexOf(product);
    if (productIndex !== -1) {
      this.cartItems.splice(productIndex, 1);
      this.cartService.setCartItems(this.cartItems); 
      this.cartItemCount = this.cartItems.length; 
    }
  }

  onCommanderClick() {
    this.commandeReussie = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Commande réussie',
      detail: 'Votre commande a été passée avec succès.'
    });
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    if (event.label !== 'Acceuil') {
      const accueilItem = this.items.find((item) => item.label === 'Acceuil');
      if (accueilItem) {
        accueilItem.disabled = true;
      }
    }
  }
  

}
