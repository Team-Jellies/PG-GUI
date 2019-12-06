// import React from 'react';
// import ReduxThunk from 'redux-thunk';
// import * as type from '../constant/actionTypes.js';
import store from '../store';
import * as actionCreator from '../constant/actionCreator.js';



const getThunkName = (uri) => 
 () => {
   console.log('in thunk name')
  const data = { uri }
  // this.setState({ uri });
  // const data = { uri };
  fetch('/server/tablenames', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      const titlesArray = [];
      result.forEach(el => {
        if (el.tablename.slice(0, 4) !== 'sql_') {
          titlesArray.push(el.tablename);
        }
      });
      return titlesArray;
    }).then(arr => {store.dispatch(actionCreator.getTableName(arr))});
  }


const getThunkTable = (queryString) => 
  () => {
    console.log(queryString)
    // Get required data to build queryString to query database
    const uri = store.getState().data.uri;
    const currentTable = document.querySelector('#selectedTable').value;
    let isdefault = false;
    

    if (!queryString) {
      isdefault = true;
      queryString = 'select * from ' + currentTable;
    }

    const tableData = { uri, queryString };
    
    // send URI and queryString in a post request
    fetch('/server/table', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tableData) 
    })
      .then(res => res.json())
      .then(result => {
        if (!isdefault) {
          return store.dispatch(getThunkTable())
        }
        store.dispatch(actionCreator.getTableData({result, currentTable}))
      });
    }

export default {
  getThunkName,
  getThunkTable
};
