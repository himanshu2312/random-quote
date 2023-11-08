const quotesReducer = (state = [], action) => {
      if (action.type === 'NEXT') {
            return state.concat(action.payload);
      } else {
            return state;
      }
}

export default quotesReducer;