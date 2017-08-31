import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../../components/Book';
// import { addBookToFakeXHR } from '../../lib';
import { addBook } from '../../actions';


class NewBookForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  handleChangeAuthor(e){
    this.setState({
      author: e.target.value
    });
  }

  handleBookSubmit(){
    let newBook = {
      title: this.state.title,
      author: this.state.author,
    };

    this.props.addBook(newBook);
    var reset = document.querySelectorAll(".inputField");
    reset[0].value = '';
    reset[1].value = '';

    // addBookToFakeXHR(newBook)
    //   .then(_ => {
    //     console.log('added to database')
    //   })
  }

  render(){
    return (
      <div className="book-form">
        <label htmlFor="book-form">Add New Book</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Title"
          className="inputField"
          onChange={this.handleChangeTitle.bind(this)}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Author"
          className="inputField"
          onChange={this.handleChangeAuthor.bind(this)}
        />
        <br/>

        <button onClick={this.handleBookSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch(addBook(book));
    }
  }
}

const ConnectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBookForm)

export default ConnectedNewBookForm;