import React, { Component } from 'react';

class NewBookForm extends Component {

  render(){
    return (
      <div className="book-form">
        <label htmlFor="book-form">Add New Book</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Title"
          onChange={this.props.handleChangeTitle}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Author"
          onChange={this.props.handleChangeAuthor}
        />
        <br/>
        <button onClick={this.props.handleBookSubmit}>Submit</button>
      </div>
    );
  }
}

export default NewBookForm;