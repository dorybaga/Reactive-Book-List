import React from 'react';

const BookFilterInput = ({filterInputChange}) => {
  return (
    <div className="book-filter">
      <label htmlFor="book-filter">Filter Books By Title</label>
      <br />
      <input id="book-filter"
        type="text"
        placeholder="Book Title"
        onChange={filterInputChange}
      />
    </div>
  )
}

export default BookFilterInput;