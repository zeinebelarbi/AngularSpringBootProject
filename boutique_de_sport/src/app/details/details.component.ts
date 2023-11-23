import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product, Color, Size } from 'src/app/entity/product';
import { ProductService } from 'src/app/service/productservice';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CartService } from 'src/app/service/cartservice';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userIsLoggedIn: boolean = false;
  sizes: Size[];
  selectedSizes: Size[] = [];
  colors: Color[];
  selectedColors: Color[] = [];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  selectedLanguage: any;
  items!: MenuItem[];
  activeItem: MenuItem | undefined;
  responsiveOptions: any[] | undefined;
  langueOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];
  selectedProduct: Product | undefined;
  adaptedProduct: Product = {
    name: '',
    sizes: [],
    colors: [],
    price: 0,
    quantity: 0
  };
  formGroup: FormGroup;
  cartItemCount: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      value: ['1']
    });
    this.selectedLanguage = 'fr';
    this.sizes = [
      { size: 'Xs' },
      { size: 'S' },
      { size: 'M' },
      { size: 'L' },
      { size: 'XL' },
      { size: 'XXL' },
    ];
    this.colors = [
      { color: 'Gris' },
      { color: 'Bleu' },
      { color: 'Rose' },
      { color: 'Vert' },
      { color: 'Noir' },
      { color: 'Blanc' },
    ];
    this.formGroup = new FormGroup({
      value: new FormControl(),
    });
  }

  ngOnInit() {
    this.userIsLoggedIn = true;
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 2,
      },
      {
        breakpoint: '991px',
        numVisible: 5,
        numScroll: 2,
      },
      {
        breakpoint: '767px',
        numVisible: 5,
        numScroll: 2,
      },
    ];

    this.items = [
      { label: 'Acceuil', routerLink: '/' },
      { label: 'Femmes', routerLink: '/femmes' },
      { label: 'Hommes', routerLink: '/hommes' },
      { label: 'Enfants', routerLink: '/enfants' },
      { label: 'Accessoires', routerLink: '/accessoires' },
    ];
    const currentRoute = this.router.url;
    this.activeItem = this.items.find((item) => item.routerLink === currentRoute) || this.items[0];
    this.route.paramMap.subscribe((params) => {
      const productName = params.get('productName');
      if (productName) {
        this.selectedProduct = this.productService.getProductByName(productName);
        if (this.selectedProduct) {
          this.adaptedProduct = {
            name: this.selectedProduct.name,
            price: this.calculatePrice(this.selectedProduct),
            sizes:this.selectedSizes.map(size => size.size),
            colors:this.selectedColors.map(color => color.color),

            quantity: this.formGroup.get('value')?.value || 1
          };
        }
      }
    });
  }

  calculatePrice(product: Product): number {
    if (product?.status === 'Nouveautés' || product?.status === 'Tendances') {
      return product.price || 0;
    } else if (product?.status === 'Articles soldés') {
      return product.newprice || 0;
    }
    return 0;
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

  addToCart() {
    if (this.userIsLoggedIn && this.selectedProduct) {
      this.cartService.addToCart([this.adaptedProduct]);
      this.cartItemCount = this.cartService.getCartItemCount();
    } else {
      this.router.navigate(['/connexion']);
    }
  }
  }

