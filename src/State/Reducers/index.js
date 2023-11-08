import { combineReducers } from "redux";
import savedQuotesReducer from "./savedQuotesReducer";
import quotesReducer from "./quotesReducer";

const Reducers = combineReducers(
      {
            quotes: quotesReducer,
            savedQuotes: savedQuotesReducer
      }
)

export default Reducers;