import { React, useState } from 'react'
import "./QuoteItem.css"
import { bindActionCreators } from 'redux'
import actionCreators from "../State/index"
import { useDispatch } from 'react-redux'

const QuoteItem = ({ quote }) => {
      const dispatch = useDispatch();
      const actions = bindActionCreators(actionCreators, dispatch);
      const [bookMark, setBookMark] = useState(`${quote.isSaved ? 'solid' : 'regular'}`);
      const toggleIcon = (id) => {
            if (bookMark === 'solid') {
                  actions.updateQuote(id)
                  setBookMark('regular')
                  actions.removeQuote(id)
            }
            else {
                  setBookMark('solid')
                  actions.addQuote(quote)
            }
      }

      return (
            <div className='col-md-6 my-3 d-flex flex-column' id="quote">
                  <h6>{quote.content}</h6>
                  <div className='mt-5'>
                        <i className={`fa-${bookMark} fa-bookmark`} style={{ color: "#ffffff" }} onClick={()=>toggleIcon(quote._id)}></i>
                        <p className='author'>~{quote.author}</p>
                  </div>
            </div>
      )
}

export default QuoteItem
