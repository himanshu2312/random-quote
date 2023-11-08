const savedQuotesReducer = (state = [], action) => {
      if (action.type === 'ADD') {
            console.log("Adding", action.payload)
            action.payload.isSaved = true;
            return state.concat(action.payload);
      }
      else if (action.type === 'REMOVE') {
            console.log("removing")
            state = state.filter(s => s._id !== action.id)
            return state
      }
      else {
            return state;
      }
}

export default savedQuotesReducer;