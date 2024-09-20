import type { Struct, Schema } from '@strapi/strapi';

export interface ProductCart extends Struct.ComponentSchema {
  collectionName: 'components_product_carts';
  info: {
    displayName: 'Cart';
    icon: 'shoppingCart';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.cart': ProductCart;
    }
  }
}
