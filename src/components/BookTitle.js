import React from 'react';

const BookTitle = ({bookTitle, onTitleSelect}) => {

  return(
    <tr>
      <td className="bookTitles" onClick={() => onTitleSelect(bookTitle)}>
        { bookTitle }
      </td>
    </tr>
  )
}

export default BookTitle
