import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { calculateScore } from '../../../services/books';

const GeneralScore = ({ book }) => {
  const { color, label, recommended } = calculateScore(book.averageScore);

  return (
    <Container scoreColor={color}>
      <div className="score">
        <span className="general-average-score">{book.averageScore}</span>
        <span>{label}</span>
      </div>
      {recommended && (
        <p className="score-comment">Recomendado pelos editores</p>
      )}
    </Container>
  );
};

GeneralScore.propTypes = {
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

export default GeneralScore;
