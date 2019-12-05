// WARNING // THIS FILE IS NOT BEING USED 
// Redux is not implemented yet, all methods used on react should have been reducers


import * as type from '../constant/actionTypes';


const initialState = {
  uri: '',
  tableNames: [],
  currentTable: '',
  data: []
}

const reducer = (state = initialState, action) => {
  if (!action.payload) return state;
  switch (action.type) {
    case type.GET_URI:
        // const uri = document.querySelector('#uri').value;
      const uri = action.payload;
      return ({
          ...state,
          uri
        })
    case type.GET_NAMES:
      return ({
            ...state, 
            tableNames: action.payload 
          });
          // this.setState({ uri });
          // const data = { uri };

    case type.GET_TABLE:
      return ({
        ...state,
        data: action.payload.result,
        currentTable: action.payload.currentTable
        
      })
    default: return state;
  }
}
// const reducer = () => {

// }

export default reducer;