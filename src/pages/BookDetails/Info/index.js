import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowBack } from 'react-icons/md';

import { Container, Cover } from './styles';

const Info = ({ book }) => (
  <Container>
    <Link className="go-back" to="/">
      <MdArrowBack size={32} color="#2ecc71" />
    </Link>
    <Cover src={book.coverUrl} />
    <h4 className="title">{book.name}</h4>
    <div className="book-rating">
      <StarRatings
        rating={book.rating}
        starRatedColor="#f1c40f"
        starDimension="18"
        starSpacing="0"
      />
      ({book.rating})
    </div>
    <div className="price">
      de <span className="discount">R$ {Number(book.price).toFixed(2)}</span>
      por <span>R$ {Number(book.promotionalPrice).toFixed(2)}</span>
    </div>
  </Container>
);

Info.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    coverUrl: PropTypes.string,
    rating: PropTypes.number,
    promotionalPrice: PropTypes.number,
    price: PropTypes.number,
    averageScore: PropTypes.number,
    scores: PropTypes.instanceOf(Array),
    keywords: PropTypes.instanceOf(Array),
    description: PropTypes.string,
  }).isRequired,
};

export default Info;
