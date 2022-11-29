import './styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details';

import { getProduct } from '../../services/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="details__container">
      <Details product={product} />
    </div>
  );
};

export default ProductDetail;
