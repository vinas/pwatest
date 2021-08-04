import React from 'react';
import PropTypes from 'prop-types';

import { Container, Score, Value } from './styles';

import { calculateScore } from '../../../services/books';

const Scores = ({ book }) => (
  <Container>
    {book.scores &&
      book.scores.map((score, index) => {
        const scoreColor = calculateScore(score.value).color;
        const idx = `a${index}`;
        return (
          <Score scoreColor={scoreColor} key={idx}>
            <Value scoreColor={scoreColor}>
              <span>{score.value}</span>
            </Value>
            <span className="label">{score.label}</span>
          </Score>
        );
      })}
  </Container>
);

Scores.propTypes = {
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

export default Scores;
