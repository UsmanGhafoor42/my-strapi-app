/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany('api::product.product', {
        populate: 'Image', // Ensure 'image' is populated
      });
    return entries;
  },
}));
// export default factories.createCoreController('api::product.product');
