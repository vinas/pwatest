import api from './api';

export const validateIsbn = (isbn) => {
  if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') return false;

  const isbnDigit = parseInt(isbn[isbn.length - 1], 10);
  let multiplier = 0;

  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1;
      return total + parseInt(num, 10) * multiplier;
    }, 0);

  const validDigit = 10 - (isbnSum % 10);

  return isbnDigit === validDigit;
};

export const getBook = async (isbn) => {
  const response = await api.get(`/books/${isbn}`);
  return response.data;
};

export const calculateScore = (score) => {
  if (score > 4.5)
    return { color: '#2ecc71', label: 'Excelente', recommended: true };
  if (score > 3.5)
    return { color: '#f1c40f', label: 'Bom', recommended: true };
  if (score > 2.5)
    return { color: '#e67e22', label: 'Razoável', recommended: false };
  if (score > 1)
    return { color: '#d35400', label: 'Ruim', recommended: false };
  return { color: '#c0392b', label: 'Péssimo', recommended: false };
};
