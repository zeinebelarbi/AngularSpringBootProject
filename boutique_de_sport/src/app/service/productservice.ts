import { Injectable } from '@angular/core';
import { Product } from '../entity/product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductFilter } from '../entity/productfilter';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    private products: Product[];
    private apiUrl = 'http://localhost:9085';
    productService: any;
    

    constructor(private http: HttpClient) {
        this.products = this.getProductsData();   }
        getFilteredProducts(filter: ProductFilter): Observable<Product[]> {
            console.log('Filter:', filter);
            return this.http.post<Product[]>(`${this.apiUrl}/filter`, filter);
          }
    
    
    getProductsData() {
        return [
            {
                name: 'Doudoune Marron Homme',
                image: 'doudoune-ho.png',
                price: 180,
                category: 'homme',
                type: 'hauts',
                colors: ['marron'],
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
                reference: '0o1235',
                status:'Tendances'
              },
            {
               
                name: 'Chaussures de Tennis Femme',
                image: 'chaussures-de-tennis-fe.jpg',
                price: 95,
                status: 'Tendances', 
                reference: '0o2367',
                category: 'femme',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
                colors: ['blanc','noir'],
            },
            {
                
                name: 'Capuche Vert Adulte Homme ',
                image:  'capuche-vert-ho.jpg',
                price: 79,
                status: 'Tendances',
                reference: '753148',
                category: 'homme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
                colors: ['blanc','noir'],
            },
            {
                
                name: 'Pantalon Running Adulte Homme',
                image:  'pantalon-running.jpg',
                price: 65,
                status:  'Tendances',
                reference: '159840',
                colors: ['gris','noir'],
                category: 'homme',
                type: 'pantalonsLeggings',
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
            },
            {

                name: 'Sac de Randonnée Accessoire',
                image:   'sac-de-randonnée.png',
                price: 47,
                status: 'Tendances',
                reference: '456123',
                colors: ['gris','noir', 'vert'],
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
            
            },
            {
               
                name: 'Gourde Randonnée0.6L Accessoire',
                image:   'Gourde-de-randonnée.png',
                price: 21,
                status: 'Nouveautés',
                reference: '741852',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu'],
            },
          
            {
               
                name: 'Sweat Training Rose Pâle Femme',
                image:  'sweat-rose-fe.png',
                price: 35,
               status: 'Nouveautés',
                reference: '123065',
                category: 'hauts',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu'],
            },
            {
               
                name: 'Tente de camping 3 places Accessoire ',
                image:  'tante.png',
                price: 230,
               status: 'Nouveautés',
                reference: '486213',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu','blanc'],
            },
            {
               
                name: 'Chaussettes Enfant lot de 3',
                image:'chausette-enfants.jpg',
                price: 16,
                status: 'Nouveautés',
                reference: '456129',
                category: 'enfant',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu','blanc'],
            },
            {
               
                name: 'Legging Noir Femme',
                image: 'legging-fe.png',
                newprice: 26.5,
                oldprice: 32,
                status: 'Articles soldés',
                reference: '103264',
                category: 'femme',
                type: ' pantalonsLeggings',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu','blanc'],
            },
            {
                
                name: 'Chaussures de Trail Homme',
                image: 'rail-ho.png',
                newprice: 62.25,
                oldprice: 124.5,
                status: 'Articles soldés',
                reference: '484236',
                category: 'homme',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu','blanc'],
            },
            {
                
                name: ' Casquette de Golf Adulte Homme',
                image: 'Casquette-de-golf-adulte.jpg',
                newprice: 51,
                oldprice:60,
                status: 'Articles soldés',
                reference: '459732',
                category: 'homme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir', 'vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Planche de skate en Bois Accessoire',
                image: 'planche-de-skate.png',
                newprice: 26.5,
                oldprice:60,
                status: 'Articles soldés',
                reference: '912378',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir'],
            },
            {
              
                name: 'T-shirt Yoga Femme',
                image: 'T-shirt-yoga-fe.png',
                newprice: 21.25,
                oldprice:26.5,
                status: 'Articles soldés',
                reference: '152489',
                category: 'femme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Montre de sport Enfant',
                image: 'montre-enfants.png',
                price: 65,
                status: 'Nouveautés',
                reference: '754839',
                category: 'enfant',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Set de 3 protections Rollers Accessoire ',
                image: 'roulers3.png',
                price: 60,
                status: 'Tendances',
                reference: '785123',
                category: ' accessoire',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Sandales de randonnée Enfant',
                image: 'sandalesderandonnéeenfants.png',
                price: 65,
                status: 'Tendances',
                reference: '102478',
                category: ' enfant',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Chaussures de Football Homme',
                image: 'footshoes.jpg',
                price: 150,
                status: 'Tendances',
                reference: '469158',
                category: ' homme',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            }, 
            {
              
                name: 'Survêtement Enfant',
                image: 'survetementenfants.jpg',
                price: 72,
                status: 'Tendances',
                reference: '783412',
                category: ' enfant',
                type: ' hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Pantalon Football Adulte Homme',
                image: 'pantalon_dentrainement_de_football_enfant.jpg',
                price: 46,
                status: 'Tendances',
                reference: '984632',
                category: 'homme ',
                type: 'pantalonsLeggings',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Kit Haltère 10Kg Musculation Accessoire',
                image: 'kit_haltere_10_kg_musculation.jpg',
                price: 90,
                status: 'Tendances',
                reference: '784236',
                category: ' accessoire ',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Shaker Transparent 700 ML Accessoire',
                image: 'shaker.png',
                price: 15,
                status: 'Tendances',
                reference: '145287',
                category: ' accessoire ',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'T-shirt Tennis Col Rond Femme',
                image: 't-shirt-tennis-col-rondfe.jpg',
                price: 35,
                status: 'Nouveautés',
                reference: '635789',
                category: ' femme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Chaussures Marche Urbaine Femme ',
                image: 'chaussuremarcheurbainefe.jpg',
                price: 60,
                status: 'Nouveautés',
                reference: '198753',
                category: ' femme',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Gilet Sans Manche Equitation Homme',
                image: 'gilet-sans-manche-equitation-homme.jpg',
                price: 100,
                status: 'Nouveautés',
                reference: '785496',
                category: ' homme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],



            },
            {
              
                name: 'Lampe de Camping Accessoire ',
                image: 'lampedecamp.png',
                price: 21,
                status: 'Nouveautés',
                reference: '587496',
                category: '  accessoire',
                type: ' hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Gants Vélo VTT Homme',
                image: 'lampedecamp.png',
                price: 63,
                status: 'Nouveautés',
                reference: '456327',
                category: ' homme',
                type: ' hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Pack de 5 chaussettes Montantes Enfant',
                image: 'packde5chaussettes.png',
                price: 30,
                status: 'Nouveautés',
                reference: '178365',
                category: ' enfant',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'T-shirt Gym Baby Imprimé Rose',
                image: 'T-shirtGym.png',
                newprice: 25,
                oldprice: 21.25,
                status: 'Articles soldés',
                reference: '367458',
                category: ' enfant',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Corde à Sauter Accessoire',
                image: 'corde a sauter.jpg',
                newprice: 22.5,
                oldprice: 30,
                status: 'Articles soldés',
                reference: '583279',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Sac à Dos de Randonnée 10L Accessoire',
                image: 'Sacadosde rand.jpg',
                newprice: 30,
                oldprice: 15,
                status: 'Articles soldés',
                reference: '128937',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Lunettes Solaires de Randonnée Homme',
                image: 'lunettessolairederand.jpg',
                newprice: 72,
                oldprice: 50.4,
                status: 'Articles soldés',
                reference: '527931',
                category: 'homme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Boots Equitation Enfant',
                image: 'bootsequitationenf.jpg',
                newprice: 66,
                oldprice: 49.5,
                status: 'Articles soldés',
                reference: '196741',
                category: 'enfant',
                type: 'chaussuresBottes',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'T-shirt de Randonnée Homme',
                image: 'T-shirtrandho.png',
                newprice: 47,
                oldprice: 37.6,
                status: 'Articles soldés',
                reference: '365241',
                category: ' homme',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
            {
              
                name: 'Montre chronomètre de Course Accessoire',
                image: 'montrechronodecourse.jpg',
                newprice: 40,
                oldprice: 24,
                status: 'Articles soldés',
                reference: '086448',
                category: 'accessoire',
                type: 'hauts',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                quantity: 20,
                colors: ['gris','noir','vert','rose','bleu','blanc'],
            },
           
           
                ];
    }

    getTendancesProducts(): Product[] {
        
        return this.products.filter(product =>product.status==='Tendances');
    }
    getNouveautesProducts(): Product[] {

        return this.products.filter(product => product.status === 'Nouveautés');
    }

    getArticlessoldesProducts(): Product[] {

        return this.products.filter(product => product.status === 'Articles soldés');
    }
    getTrendingProducts(): Observable<Product[]> { 
        return this.http.get<Product[]>(`${this.apiUrl}/trending-products`);
      }
    getNewProducts(): Observable<Product[]> { 
        return this.http.get<Product[]>(`${this.apiUrl}/new-products`);
      }
    getSaleProducts(): Observable<Product[]>  {
        return this.http.get<Product[]>(`${this.apiUrl}/sale-products`);
      }
      getProductByName(productName: string): Product| undefined {
        return this.products.find(product => product.name === productName);
      }
      saveProductData(productData: any): Observable<any> {
       
        return of(productData);
      }
      applyFilter(): void {
        this.productService.getFilteredProducts(this.filter)
          .subscribe((products: any) => {

            console.log(products);
          });
      }
    filter(filter: any) {
        throw new Error('Method not implemented.');
    }
    } 
    
  
  
    