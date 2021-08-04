import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import { getBook } from '../../services/books';

import Info from './Info';
import GeneralScore from './GeneralScore';
import Scores from './Scores';
import Extra from './Extra';

const BookDetails = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
      const loadBook = async () => {
        try {
          const response = await getBook(isbn);
          setBook(response);
        } catch (e) {
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
          <Info book={book} />
          <GeneralScore book={book} />
          <Scores book={book} />
          <Extra book={book} />
        </>
      )}
    </Container>
  );
};

export default BookDetails;
