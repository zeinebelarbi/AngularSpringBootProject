import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/service/productservice';
import { UserService } from '../service/userservice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsTendances: Product[] ; 
  productsNouveautes: Product[] ;
  productsArticlessoldes: Product[] ;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  value2: string | undefined;
  selectedLanguage: any;
  items!: MenuItem[];

  activeItem: MenuItem | undefined;
  products: Product[] = [];
  currentUser: any;
  responsiveOptions: any[] | undefined;
  langueOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {
    this.selectedLanguage = 'fr';
    this.productsTendances = this.productService.getTendancesProducts();
    this.productsNouveautes = this.productService.getNouveautesProducts();
    this.productsArticlessoldes = this.productService.getArticlessoldesProducts();
    this.currentUser = this.userService.getCurrentUser();
}

  
  ngOnInit() {


    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 5,
            numScroll: 2
        },
        {
            breakpoint: '991px',
            numVisible: 5,
            numScroll: 2
        },
        {
            breakpoint: '767px',
            numVisible: 5,
            numScroll: 2
        }
    ];
    
    this.items = [
      { label: 'Acceuil', routerLink: '/' },
      { label: 'Femmes', routerLink: '/femmes'  },
      { label: 'Hommes' , routerLink: '/hommes'},
      { label: 'Enfants' , routerLink: '/enfants' },
      { label: 'Accessoires' , routerLink: '/accessoires'}
    ];
    const currentRoute = this.router.url;
    this.activeItem = this.items.find(item => item.routerLink === currentRoute) || this.items[0];

  }
  getSeverity(status: string) {
    switch (status) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'info';
    }
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    if (event.label !== 'Acceuil') {
      const accueilItem = this.items.find(item => item.label === 'Acceuil');
      if (accueilItem) {
        accueilItem.disabled = true;
      }
    }
  }
  activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
}
}
