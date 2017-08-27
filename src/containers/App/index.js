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
    }

    componentWillMount() {
      this.setState({
        books: [],
        bookFilterText: ''
      });

      getBooksFromFakeXHR()
      .then(bookList => {
        console.log(bookList);
        this.setState({
          books: bookList
        });
      })
      .catch(err => {
        console.log(err);
      });
    }

    handleFilterInputChange(e){
      this.setState({
        bookFilterText: e.target.value
      })
    }

    handleChangeTitle(e){
      this.setState({
        bookTitle: e.target.value
      });
    }

    handleChangeAuthor(e){
      this.setState({
        bookAuthor: e.target.value
      });
    }

    handleBookSubmit(){
      let newBook = {
        title: this.state.bookTitle,
        author: this.state.bookAuthor
      };
      this.setState({
        books: [...this.state.books, newBook]
      })
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
          handleChangeTitle={
            this.handleChangeTitle.bind(this)
          }
          handleChangeAuthor={
            this.handleChangeAuthor.bind(this)
          }
          handleBookSubmit={
            this.handleBookSubmit.bind(this)
          }
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
