import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedProducts extends Schema.Component {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'Products';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'shared.products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.products': SharedProducts;
    }
  }
}
