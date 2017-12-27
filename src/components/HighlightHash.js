import React from 'react'
import Highlight from './Highlight'

const HighlightHash = (props) => {

  const highlights = props.highlights.map((highlight, index) => {
    return <Highlight key={index} highlight={highlight.highlighted_text}/>
  })

  return(
    <div className="table-responsive col-xs-8">
      <table className="table-hover">
        <thead>
          <tr>
            <th>Highlights:</th>
          </tr>
        </thead>
        <tbody>
          { highlights }
        </tbody>
      </table>
    </div>
  )

}

export default HighlightHash
