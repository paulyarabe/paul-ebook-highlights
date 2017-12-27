import React, { Component } from 'react';

class BookTitle extends Component {

  handleClick = (e) => {
    this.props.onTitleSelect(this.props.bookTitle)
    var list= document.getElementsByClassName("bookTitles");
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
      }
    e.target.classList.add('active')
  }

  render() {
    return(
      <tr>
        <td className= 'bookTitles' onClick={this.handleClick}>
          { this.props.bookTitle }
        </td>
      </tr>
    )
  }
}
export default BookTitle
