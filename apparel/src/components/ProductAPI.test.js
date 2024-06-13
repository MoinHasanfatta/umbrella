import Products from './ProductAPI';

describe('Products Data', () => {
  test('all_products_have_required_fields', () => {
    Products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
    });
  });

  test('products_are_correctly_categorized', () => {
    const categories = ['men', 'women', 'kids', 'traditional'];
    Products.forEach(product => {
      expect(categories).toContain(product.category);
    });
  });

  test('prices_are_correctly_formatted', () => {
    Products.forEach(product => {
      expect(product.price).toMatch(/^Rs\.\d{1,4}$/);
    });
  });
});
