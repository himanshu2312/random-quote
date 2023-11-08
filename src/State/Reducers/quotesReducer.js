const quotesReducer = (state = [], action) => {
      if (action.type === 'NEXT') {
            return state.concat(action.payload);
      }
      else if(action.type==='UPDATE'){
            const temp =state.find((s) => s._id === action.id);
            temp.isSaved = false;
            return state.map(s => s._id === action.id? temp:s);
      }
      else {
            return state;
      }
}

export default quotesReducer;