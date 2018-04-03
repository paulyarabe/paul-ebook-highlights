import React, { Component } from 'react';

class BookTitle extends Component {

  handleClick = (e) => {
    this.props.onTitleSelect(this.props.bookTitle)
    var list= document.getElementsByClassName("bookTitles");
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
      }
    e.target.classList.add('active');
    document.getElementById('highlights_table').scrollIntoView({block: 'start',  behavior: 'smooth'});
  }

  render() {
    return(
      <tr>
        <td className= 'bookTitles' onClick={this.handleClick}>
          <a className="bookTitleUrls" href={this.props.url} target="_blank" rel="noopener noreferrer">{ this.props.bookTitle }</a>
        </td>
      </tr>
    )
  }
}
export default BookTitle
