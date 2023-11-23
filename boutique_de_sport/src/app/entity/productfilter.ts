export interface ProductFilter {
    productType: {
        hauts: boolean;
        pantalonsLeggings: boolean;
        chaussuresBottes: boolean;
      };
      productColor: {
        blanc: boolean;
        noir: boolean;
        rose: boolean;
        vert: boolean;
        gris: boolean;
        bleu: boolean;
      };
      productPrice: {
        range1: boolean;
        range2: boolean;
        range3: boolean;
        range4: boolean;
      };
      productCategory: {
        homme: boolean,
        femme: boolean,
        enfant: boolean,
        accessoire: boolean
      },
      productStatus: {
        Tendance:boolean,
        Nouveauté:boolean,
        Article_soldé: boolean
       },
       productSize: {
        xs: true,
        s: true,
        m: true,
        l: true,
        xl: true,
        xxl: true
      },
}
