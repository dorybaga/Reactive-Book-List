import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db';

class App extends Component {
    constructor(){
      super();
    }

    componentWillMount() {
      // console.log('run logic before render');
      this.setState({
        isClicked: 'false',
        // books: booksFromFakeDB,
        bookTitle: '',
        bookAuthor: ''
      });
    }

    componentDidMount() {
      // console.log('run logic after render');
      getBooksFromFakeXHR()
      .then((books) => {
        console.log(books);
      });

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

        <booksFromFakeDB />
      </div>

    );
  }
}

export default App;
