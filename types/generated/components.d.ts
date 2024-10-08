import type { Struct, Schema } from '@strapi/strapi';

export interface ProductCart extends Struct.ComponentSchema {
  collectionName: 'components_product_carts';
  info: {
    displayName: 'Cart';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.cart': ProductCart;
    }
  }
}
