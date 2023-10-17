'use strict';
const { faker } = require('@faker-js/faker/locale/vi');
module.exports = {
  register(/*{ strapi }*/) { },

  //async bootstrap(/*{ strapi }*/) { }

  // async bootstrap({ strapi }) {
  //   for (let i = 0; i < 250; i++) {
  //     await strapi.entityService.cree('apati::product.product', {
  //       data: {
  //         productName: faker.commerce.productName() + faker.word.noun(),
  //         description: faker.commerce.productDescription() + faker.word.noun(),
  //         price: faker.commerce.price(20000, 100000),
  //         detail: faker.lorem.paragraphs(3),
  //       }
  //     });
  //   }
  // }

  // async bootstrap({ strapi }) {
  //   for (let i = 0; i < 10; i++) {
  //     await strapi.entityService.create('api::category.category', {
  //       data: {
  //         categoryName: faker.commerce.department() + faker.random.word(),
  //         description: faker.lorem.paragraph(),
  //       },
  //     });
  //   }
  // } 13-22
  // for (let p = 271; p <= 520; p++) {
  //   let s = `INSERT INTO \`files_related_morphs\` (\`file_id\`, \`related_id\`, \`related_type\`, \`field\`, \`order\`) VALUES (${Math.floor(Math.random() * (88 - 23 + 1) + 23)}, '${p}', 'api::product.product', 'image', '1');`;
  //   document.write(s);
  // }

  // for (let k = 271; k <= 520; k++) {
  //   let s = "INSERT INTO `products_category_links` (`product_id`, `category_id`) VALUES (" + k + ",'" + Math.floor(Math.random() * (22 - 13 + 1) + 13) + "');";
  //   document.writeln(s);
  // }

}
