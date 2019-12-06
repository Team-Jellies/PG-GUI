// WARNING // THIS FILE IS NOT BEING USED 
// Redux is not implemented yet, all methods used on react should have been reducers


import * as type from '../constant/actionTypes';


const initialState = {
  uri: '',
  tableNames: [],
  currentTable: '',
  data: [],
  bool: false
}

const reducer = (state = initialState, action) => {
  if (!action.payload) return state;
  // console.log(action);
  switch (action.type) {
    case type.GET_URI:
      // const uri = document.querySelector('#uri').value;
      const uri = action.payload;
      // console.log('hitting this', uri)
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
      const currentBool = !state.bool
      // document.getElementById('load').click()
      return ({
        ...state,
        data: action.payload.result,
        currentTable: action.payload.currentTable,
        bool: currentBool
      })
    default: return state;
  }
}


export default reducer;