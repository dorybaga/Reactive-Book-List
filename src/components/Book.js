import React from 'react';

const Book = ({ title, author }) => {
  return (
    <ul>
      <li>
        <h3>{ title }</h3>
        <p>{ author }</p>
      </li>
    </ul>
  );
}

export default Book;
