import React from 'react'
import BookTitle from './BookTitle'

const BookList = (props) => {

  const bookTitles = props.books.map((title, index) => {
    return <BookTitle key={index}
                      bookTitle={title}
                      onTitleSelect={props.onTitleSelect}/>
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
  )
}

export default BookList
