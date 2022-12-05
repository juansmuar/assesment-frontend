import './styles.css';
import PropTypes from 'prop-types';

const Details = ({ product = {} }) => {
  const {
    image,
    title,
    description,
    category,
    // rating,
  } = product;
  // const {
  //   rate,
  //   count,
  // } = rating;

  return (
    <div className="product__container">
      <img src={image} alt="NFT" className="product__image" />
      <section className="info__container">
        <h1 className="product__title--color">{title}</h1>
        <h3 className="product__category"><span className="product__title--color">Category: </span>{category}</h3>
        <p><span className="product__title--color">Description: </span>{description}</p>
        {/* <p>{rate}</p>
        <p>{count}</p> */}
        <button className="bid__button" type="button">Add to cart</button>
      </section>
    </div>
  );
};

Details.propTypes = {
  product: PropTypes.string.isRequired,
};

export default Details;
