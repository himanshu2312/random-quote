import React from 'react'
import Quotes from './Quotes'
import "./Home.css"
import { useSelector } from 'react-redux'

const Saved = () => {
  const quotes = useSelector(state => state.savedQuotes);
  console.log(quotes);
  return (
    <div className='container home'>
      <Quotes quotes={quotes} />
    </div>
  )
}

export default Saved;
