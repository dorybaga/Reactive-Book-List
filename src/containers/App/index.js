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
      // console.log('run logic before render');
      //initial state
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

    componentDidMount() {
      // console.log('run logic after render');

    }

    handleChangeTitle(e){
      // console.log('changed title: ', e.target.value);
      this.setState({
        bookTitle: e.target.value
      });
    }

    handleChangeAuthor(e){
      // console.log('changed author: ', e.target.value);
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
          title="Top 10 Books"
        />
        <BookFilterInput
          filterInputChange={
            this.handleFilterInputChange.bind(this)
          }
        />
        <BookList
          filter={this.state.bookFilterText}
          books={this.state.books}
        />

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
      </div>
    );
  }
}

export default App;
