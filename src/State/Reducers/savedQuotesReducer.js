const savedQuotesReducer = (state = [], action) => {
      if (action.type === 'ADD') {
            console.log("Adding", action.payload)
            action.payload.isSaved = true;
            return state.concat(action.payload);
      }
      else if (action.type === 'REMOVE') {
            console.log("removing")
            return state.filter(s => s._id !== action.id)
      }
      else {
            return state;
      }
}

export default savedQuotesReducer;