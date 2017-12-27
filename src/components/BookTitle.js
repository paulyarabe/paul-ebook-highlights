import React from 'react';

//TODO: put the state in here.  have it pass back title as prop and change the background color for the cell.

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
