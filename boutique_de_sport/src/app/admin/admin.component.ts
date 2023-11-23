import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/productservice';
import { Product } from 'src/app/entity/product'; 
import { ProductFilter } from '../entity/productfilter';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productFilter: ProductFilter = {
    productSize: {
      xs: true,
      s: true,
      m: true,
      l: true,
      xl: true,
      xxl: true
    },
   
    productType: {
      hauts: true,
      pantalonsLeggings: true,
      chaussuresBottes: true,
    },
    productCategory: {
      homme: true,
      femme: true,
      enfant: true,
      accessoire: true
    },
    productColor: {
      blanc: true,
      noir: true,
      rose: true,
      vert: true,
      gris: true,
      bleu: true
    },
    productPrice: {
      range1: true,
      range2: true,
      range3: true,
      range4: true
    },
    productStatus: {
     Tendance:true,
     Nouveauté:true,
     Article_soldé: true
    },
    
  };
  initialReference!: string
  initialName!: string;
  initialCategory!: string;
  initialType!: string;
  initialStatus!: string;
  initialPrice!: number;


  reference!: string;
  name!: string;
  category!: string;
  type!:string;
  status!:string;
  price!:number;
  quantity!: number;
  color!: string;
  size!:number;
  seuil!: number;


  constructor(private productService: ProductService,private http: HttpClient) { }

  ngOnInit(): void {
    this.products = this.productService.getProductsData();
    this.filterProducts();
  }

  filterProducts(): void {
   
    this.filteredProducts = this.products; 
  }
  
  visibleEye: boolean = false;
  visiblePlus: boolean = false;
  

  showEyeDialog() {
    this.visibleEye = true;
  }
  
  showPlusDialog() {
    this.visiblePlus = true;
  }
  importImages() {
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png, image/jpeg';
    fileInput.multiple = true;
  
    
    fileInput.addEventListener('change', (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        
  
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          const fileName = file.name;
          const fileSize = file.size;
         
        }
      }
    });

    fileInput.click();
  }
  downloadProduct() {
  
    const downloadUrl = 'https://example.com/api/download/product';

    this.http.get(downloadUrl, { responseType: 'blob' }).subscribe((data) => {
      this.downloadFile(data);
    });
  }

  downloadFile(data: Blob) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product.pdf'; 
    a.click();
    window.URL.revokeObjectURL(url);
  }
  resetForm() {
   
    this.reference = this.initialReference;
    this.name = this.initialName;
    this.category = this.initialCategory;
    this.type=this.initialType;
    this.status=this. initialStatus;
    this.price=this.initialPrice;
  }
  saveProduct() {
    if (isNaN(this.price)) {
        alert('Veuillez entrer un nombre pour le prix.');
        return;
    }

    if (!this.reference || !this.name || !this.category || !this.type || !this.status || !this.price) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    if (confirm('Êtes-vous sûr d\'enregistrer le produit ?')) {
        const productData = {
            reference: this.reference,
            size: this.size,
            color: this.color,
            quantity: this.quantity,
            price: this.price,
            seuil: this.seuil,
        };

        this.productService.saveProductData(productData).subscribe((response) => {
          alert('Produit enregistré avec succès.');
        });
    } else {

        return;
    }
}
}