import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward, MdClose } from 'react-icons/md';
import { Container, Wrapper, Cover, Info, ActionButtons } from './styles';
import { getBook } from '../../services/books';

const Results = ({ isbn }) => {
  const [book, setBook] = useState();

  const closeResult = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    const loadBook = async () => {
      try {
        const response = await getBook(isbn);
        setBook(response);
      } catch (e) {
        alert(e);
        if (e.response && e.response.status === 404) {
          console.info(`ISBN "${isbn}" não foi encontrado.`);
          alert('Livro não econtrado.');
          return;
        }
        console.error('Erro ao recuperar dados do servidor.');
        alert('Erro ao recuperar dados do servidor.');
      }
    };
    loadBook();
}, [isbn]);

  return (
    <Container>
      {book && (
        <>
          <Wrapper>
            <Cover src={book.coverUrl} />
            <Info>
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
                de
                <span className="discount">
                  R$ {Number(book.price).toFixed(2)}
                </span>
                por<span>R$ {Number(book.promotionalPrice).toFixed(2)}</span>
              </div>
            </Info>
            <ActionButtons>
              <MdClose className="close" size={20} onClick={closeResult} />
              <Link to={`/book-details/${isbn}`}>
                <span className="button">
                  <MdArrowForward size={50} color="fff" />
                </span>
              </Link>
            </ActionButtons>
          </Wrapper>
        </>
      )}
    </Container>
  );
};

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
