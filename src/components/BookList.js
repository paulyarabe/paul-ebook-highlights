import React, { Component } from 'react'
import BookTitle from './BookTitle'


class BookList extends Component {

  render(){
    const bookTitles = this.props.books.map((title, index) => {
      return <BookTitle key={index}
                        bookTitle={title}
                        onTitleSelect={this.props.onTitleSelect}/>
    })

  return(
    <div className="table-responsive col-xs-5">
      <table className="table-hover">
        <thead>
          <tr>
            <th>Books:</th>
          </tr>
        </thead>
        <tbody>
          { bookTitles }
        </tbody>
      </table>
    </div>
  )}
}

export default BookList
