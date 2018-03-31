import React from 'react'

const Highlight = ({highlight, id}) => {
  return(
    <tr>
      <td>
        { highlight }
        <span className="tooltiptext">{ id }</span>
      </td>
    </tr>
  )
}

export default Highlight
