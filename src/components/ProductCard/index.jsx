import './styles.css';
import PropTypes from 'prop-types';
import Timer from '../Timer';

const ProductCard = (props) => {
  const { id, title, image } = props;
  return (
    <section className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <Timer id={id} />
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
