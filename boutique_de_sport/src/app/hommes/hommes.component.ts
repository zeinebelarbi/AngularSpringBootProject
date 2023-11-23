import { Component ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/service/productservice';
import { ProductFilter } from 'src/app/entity/productfilter';
@Component({
  selector: 'app-hommes',
  templateUrl: './hommes.component.html',
  styleUrls: ['./hommes.component.css']
})
export class HommesComponent implements OnInit {
  productFilter: ProductFilter = {
    productType: {
      hauts: false,
      pantalonsLeggings: false,
      chaussuresBottes: false
    },
    productColor: {
      blanc: false,
      noir: false,
      rose: false,
      vert: false,
      gris: false,
      bleu: false
    },
    productPrice: {
      range1: false,
      range2: false,
      range3: false,
      range4: false
    },
    productCategory: {
      homme: false,
      femme: false,
      enfant: false,
      accessoire: false
    },
    productStatus: {
      Tendance:false,
      Nouveauté:false,
      Article_soldé: false
     },
     productSize: {
      xs: true,
      s: true,
      m: true,
      l: true,
      xl: true,
      xxl: true
    },
  };
  resetFilters() {
    this.productFilter = {
      productType: {
        hauts: false,
        pantalonsLeggings: false,
        chaussuresBottes: false
      },
      productColor: {
        blanc: false,
        noir: false,
        rose: false,
        vert: false,
        gris: false,
        bleu: false
      },
      productPrice: {
        range1: false,
        range2: false,
        range3: false,
        range4: false
      },
      productCategory: {
        homme: false,
        femme: false,
        enfant: false,
        accessoire: false
      },
      productStatus: {
        Tendance:false,
        Nouveauté:false,
        Article_soldé: false
       },
       productSize: {
        xs: true,
        s: true,
        m: true,
        l: true,
        xl: true,
        xxl: true
      },
    };
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  value2: string | undefined;
  selectedLanguage: any;
  items: MenuItem[] | undefined;
  hommeProducts: Product[] = [];
  activeItem: MenuItem | undefined;
  products: Product[] = [];
  sortField!: string;
  sortOrder!: number;
  sortOptions!: any[];
  sortKey!: string;

  responsiveOptions: any[] | undefined;
  langueOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'English', value: 'en' },
  ];
  constructor(private router: Router,private productService: ProductService) {
    this.selectedLanguage = 'fr';
    this.getHommeProducts();
  }
  ngOnInit() {
   
  
    
    this.items = [
      { label: 'Acceuil', routerLink: '/' },
      { label: 'Femmes', routerLink: '/femmes'  },
      { label: 'Hommes' , routerLink: '/hommes'},
      { label: 'Enfants' , routerLink: '/enfants' },
      { label: 'Accessoires' , routerLink: '/accessoires'}
    ];
  
   

    this.activeItem = this.items[1];
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
  }
  activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
}
onSortChange(event: any) {

}
getHommeProducts() {
  const allProducts = this.productService.getProductsData();
  this.hommeProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes('homme') &&
      (product.status === 'Articles soldés' ||
        product.status === 'Tendances' ||
        product.status === 'Nouveautés')
    );
  });
}

}
