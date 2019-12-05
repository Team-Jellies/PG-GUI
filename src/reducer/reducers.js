// WARNING // THIS FILE IS NOT BEING USED 
// Redux is not implemented yet, all methods used on react should have been reducers


import * as types from '../constant/actionTypes';
import reduxThunk from 'redux-thunk';

const initialState = {
  count: 0,
  uri: '',
  tableNames: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TYPE': 
    state.count += 1;

    return {
      ...state,    
    }
    case 'SET_URI':
      //todo use action payload
        const uri = document.querySelector('#uri').value;
        return ({
          ...state,
          uri
        })
    case 'GET_NAMES':
          return {...state, tableNames: action.payload };
          // this.setState({ uri });
          // const data = { uri };

    case 'GET_TABLE':
          // Get required data to build queryString to query database
          const uri = this.state.uri;
          const tableName = document.querySelector('#selectedTable').value;
          const queryString = 'select * from ' + tableName;
          const data = { uri, queryString };
          
          // send URI and queryString in a post request
          fetch('/server/table', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) 
          })
            .then(res => res.json())
            .then(result => {
              // this.setState({
                data: result,
                isLoading: false,
                currentTable: tableName
              // });
            });

    default: return state;
  }
}
// const reducer = () => {

// }

export default reducer;