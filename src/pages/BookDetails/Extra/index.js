import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Extra = ({ book }) => (
  <>
    <Container>
      <span className="title">Descrição:</span>
      <p>{book.description && book.description}</p>
    </Container>
    <Container>
      <span className="title">Palavras-chave:</span>
      <p>{book.keywords && book.keywords.join(', ')}</p>
    </Container>
  </>
);

Extra.propTypes = {
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

export default Extra;
