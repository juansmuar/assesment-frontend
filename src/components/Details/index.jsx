import './styles.css';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
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
        <h3 className="product__title--color">{category}</h3>
        <p>{description}</p>
        {/* <p>{rate}</p>
        <p>{count}</p> */}
        <button className="bid__button" type="button">Add to cart</button>
      </section>
    </div>
  );
};

export default Details;
