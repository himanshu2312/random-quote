import React from 'react'
import QuoteItem from './QuoteItem'

const Quotes = ({ quotes }) => {

  return (
    <div className='container'>
      {
        quotes?.map((q, index) => {
          console.log(q)
          return (
            < QuoteItem quote={q} key={q._id} />)
        })
      }
    </div>
  )
}

export default Quotes;
