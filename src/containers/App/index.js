import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import { loadBooks, addBook } from '../../actions';
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
        // books: [],
        bookFilterText:''
      }
    }

    componentWillMount() {
      getBooksFromFakeXHR()
      .then(bookList => {
        this.props.loadBooks(bookList);
        // this.setState({
        //   books: bookList
        // });
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
      })
      .catch(err => {
        console.log(err);
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
        <NewBookForm />
        <BookList
          filter={this.state.bookFilterText}
          books={this.props.books}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (books) => {
      dispatch(loadBooks(books));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
