import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 60, title: 'Item1', description: 'An everyday tee for men'},
  {id: 'p2', price: 128, title: 'Item2', description: 'Everyday pants for men'},
  {id: 'p3', price: 40, title: 'Item3', description: 'An everyday belt for men'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          /> 
        ))}
      </ul>
    </section>
  );
};

export default Products;
