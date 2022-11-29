import './styles.css';
import { useState, useEffect } from 'react';

import { getAllProducts } from '../../services/products';
import ProductCard from '../ProductCard';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <section className="list__container--center">
      {
        // eslint-disable-next-line arrow-parens, array-callback-return
        products.map(product => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
            />
          );
        })
      }
    </section>
  );
};

export default ListProducts;
