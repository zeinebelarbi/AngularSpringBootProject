
export class Product {
    name?: string;
    image?: string;
    price?: number;
    newprice?: number;
    oldprice?: number;
    category?: string;
    type?: string;
    colors?: string[];
    sizes?: string[];
    quantity?: number;
    reference?: string;
    status?:string;
  }
  
  
  
export interface Size {
    size: string; 
}
export interface Color {
    color: string; 
}