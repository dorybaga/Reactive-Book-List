// to avoid mispellings in strings store the string in a const

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK  = 'ADD_BOOK';

export const loadBooks = (books) => {
  return {
    type: LOAD_BOOKS,
    books
  };
};

export const addBook = (book) => {
  console.log('ACTIONS ADD_BOOK', book);
  return {
    type: ADD_BOOK,
    book

  };
};




