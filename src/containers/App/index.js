import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BookListAppTitle from '../../components/BookListAppTitle';
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
        year: this.state.bookAuthor
      };

      console.log();
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
        <div className="book-form">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            onChange={this.handleChangeTitle.bind(this)}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Book Author"
            onChange={this.handleChangeAuthor.bind(this)}
          />
          <br/>
          <button onClick={this.handleBookSubmit.bind(this)}>Add New Book</button>
        </div>
      </div>

    );
  }
}

export default App;
