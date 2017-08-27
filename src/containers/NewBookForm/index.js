import React, { Component } from 'react';


class NewBookForm extends Component {
  render(){
    return (
      <div className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={this.props.handleChangeTitle}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="Book Author"
          onChange={this.props.handleChangeAuthor}
        />
        <br/>
        <button onClick={this.props.handleBookSubmit}>Add New Book</button>
      </div>
    );
  }
}

export default NewBookForm;