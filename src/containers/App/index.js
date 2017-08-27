import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import NewBookForm from '../NewBookForm';
import BookFilterInput from '../../components/BookFilterInput';
import BookList from '../BookList';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db';

class App extends Component {
    constructor(){
      super();

      this.state = {
        books: [],
        bookFilterText:''
      }
    }

    componentWillMount() {

      getBooksFromFakeXHR()
      .then(bookList => {
        this.setState({
          books: bookList
        });
      })
      .catch(err => {
        console.log(err);
      })
    }

    handleFilterInputChange(e){
      this.setState({
        bookFilterText: e.target.value
      })
    }

    addBook(book){
      addBookToFakeXHR(book)
      .then(book => {
          this.setState({book});
      });
    }

  render() {
    return (
      <div>
        <BookListAppTitle
          title="Top 3 Books"
        />
        <br/>
        <BookFilterInput
          filterInputChange={
            this.handleFilterInputChange.bind(this)
          }
        />
        <br/>
        <NewBookForm
          addBook={this.addBook.bind(this)}
        />
        <BookList
          filter={this.state.bookFilterText}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
