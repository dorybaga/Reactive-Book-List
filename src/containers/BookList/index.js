import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {

  render(){
    console.log('render method', this.props);
    return (
      <ul>
        {
          this.props.books.map(book => {
            return (
              <Book
                title={book.title}
                author={book.author}
                key={book._id}
              />
            )
          })
        }
      </ul>

    );
  }
}

export default BookList;