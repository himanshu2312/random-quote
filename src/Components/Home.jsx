import { React, useState } from 'react'
import Quotes from './Quotes'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from "../State/index"

const Home = () => {

      const quotes = useSelector(state => state.quotes)
      const dispatch = useDispatch();
      const actions = bindActionCreators(actionCreators, dispatch);
      const [Tag, setTag] = useState('')
      const tags = [
            "",
            "a",
            "b",
            "c"
      ]
      return (
            <div className='container home'>
                  <Quotes quotes={quotes} />
                  <div className="dropdown my-5">
                        <a className="btn btn-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{Tag}
                        </a>

                        <ul className="dropdown-menu">
                              {
                                    tags.map((tag, index) => (
                                          <li key={index}><p className='tag' onClick={() => setTag(tag)}>{tag}</p></li>
                                    ))
                              }
                        </ul>
                  </div>
                  <button type="button" className="btn btn-success" onClick={() => { actions.nextQuote() }}>Next Quote</button>
            </div>
      )
}

export default Home
