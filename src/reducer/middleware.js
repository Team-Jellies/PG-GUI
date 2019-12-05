import React from 'react';
// import ReduxThunk from 'redux-thunk';
import * as type from '../constant/actionTypes.js';
import store from '../store';
import * as actionCreator from '../constant/actionCreator.js';

const thunk = (action) => {
  switch (action.type) {
    case 'GET_NAMES':
          const data = { uri: action.payload }
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
  }
}