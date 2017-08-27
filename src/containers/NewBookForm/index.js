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
          onChange={this.handleChangeTitle.bind(this)}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Author"
          onChange={this.handleChangeAuthor.bind(this)}
        />
        <br/>

        <button onClick={this.handleBookSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default NewBookForm;