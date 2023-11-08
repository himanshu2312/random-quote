import * as api from "../api/index";

export const nextQuote = () => async(dispatch) => {
      try {
            const result = await api.nextQuote();
            const data = result.data[0];
            const nextQuote = {_id:data._id,author:data.author,content:data.content,isSaved:false}
            dispatch({ type: 'NEXT', payload: nextQuote });
      }
      catch (error) {
            console.log(console.error)
      }
}

export const addQuote = (quote) => (dispatch) => {
      try {
            dispatch({ type: 'ADD', payload: quote });
      }
      catch (error) {
            console.log(console.error)
      }
}

export const removeQuote = (id) => (dispatch) => {
      try {
            dispatch({ type: 'REMOVE', id:id });
      }
      catch (error) {
            console.log(console.error)
      }
}