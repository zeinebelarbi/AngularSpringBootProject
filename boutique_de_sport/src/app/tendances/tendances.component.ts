import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductService } from 'src/app/service/productservice';
import { Product } from '../entity/product';


@Component({
  selector: 'app-tendances',
  templateUrl: './tendances.component.html',
  styleUrls: ['./tendances.component.css']
})
export class TendancesComponent implements OnInit {
  title = 'boutique_de_sport';
  value2: string | undefined;
  selectedLanguage: any;
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  langueOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];
  trendingProducts: Product[] = [];
  sortField!: string;
  sortOrder!: number;
  sortOptions!: any[];
  sortKey!: string;
  constructor(private router: Router,private productService: ProductService) {
    this.selectedLanguage = 'fr';
    this.trendingProducts = this.productService.getTendancesProducts();
  }
  ngOnInit(): void {

    this.items = [
      { label: 'Acceuil', routerLink: '/' },
      { label: 'Femmes', routerLink: '/femmes'  },
      { label: 'Hommes' , routerLink: '/hommes'},
      { label: 'Enfants' , routerLink: '/enfants' },
      { label: 'Accessoires' , routerLink: '/accessoires'}
    ];
  
    this.activeItem = this.items[0];
    this.productService.getTrendingProducts().subscribe((data) => {
      this.trendingProducts = data;
    });
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
  activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
} 
onSortChange(event: any) {

}
}


  
   