import React, { Component } from 'react';
import Book from '../../components/Book';


class NewBookForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: ''
    }
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

export default NewBookForm;