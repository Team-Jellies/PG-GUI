import React, { Component } from 'react';
import TableDisplay from '../components/TableDisplay';
import { connect } from 'react-redux';
import * as actions from '../constant/actionCreator.js';
import store from '../store.js';
import thunks from '../reducer/middleware.js';


const mapDispatchToProps = dispatch => ({
  getUri: (string) => dispatch(actions.getUri(string)),
  getThunkName: (uri) => dispatch(thunks.getThunkName(uri)),
  getThunkTable: (obj) => dispatch(thunks.getThunkTable(obj)),
});

const mapStateToProps = (store) => ({
  uri: store.data.uri,
  tableNames: store.data.tableNames,
  currentTable: store.data.currentTable,
  data: store.data.data
})

// Create container. This is the main parent.
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  // The following are METHODS used THROUGHOUT the APP /// 
  // There are only a few methods not contained in here. 
  // update method which was dispatched to here for fun/learning. and a eventHandler on HeaderCell file.
  

  // This method is called throughout the APP to reRender after doing something
  // reRender(newString) {
  //   const tableName = this.state.currentTable;
  //   const uri = this.state.uri;
  //   let queryString;

  //   // If no personalised query is send as an arg do normal default query
  //   if(newString!== undefined){
  //     queryString=newString;
  //   }
  //   else{
  //     queryString='select * from '+ tableName;
  //   }
  //   // console.log('**********************************', queryString)
  //   const tableData = { uri, queryString };
  //   this.setState({ isLoading: true });

  //   // First fetch is to get tableNames. sending a post request of the URI of the DB.
  //   // Second fetch request is to get the table specifying the tablename from the DB.

  //   fetch('/server/tablenames', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ uri })
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       const titlesArray = [];

  //       result.forEach(el => {
  //         if (el.tablename.slice(0, 4) !== 'sql_') {
  //           titlesArray.push(el.tablename);
  //         }
  //       });
  //       this.setState({ tableNames: titlesArray });
  //     })
  //     .then(() => {
  //       fetch('/server/table', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(tableData)
  //       })
  //         .then(res => res.json())
  //         .then(result => {
  //           this.setState({
  //             data: result,
  //             isLoading: false,
  //             currentTable: tableName
  //           });
  //         });
  //     });
  // }

   // Delete row method
    // deleteRow(){
    //     const PK = Object.keys(this.state.data[0])[0]
    //     const PKValue = document.querySelector('#deleteRow').value;
    //     const queryString = `DELETE FROM ${this.state.currentTable} WHERE ${PK} = ${PKValue}`
    //     const uri = this.state.uri;

    //     fetch('/server/delete',{
    //         method: 'DELETE',
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify({uri, queryString})
    //     }).then(()=>{
    //       console.log('hi')
    //       this.reRender()})
    // }
    

    // END OF METHODS // 

render(){
    const inputStyle={margin:'10px', width: "500px",}
    const inputTableStyle={margin:'10px', width: "100px",}
    const tableOptions =[]

    // options for the scroll of table names 
    for(let i=0; i<this.props.tableNames.length; i++){
      tableOptions.push(<option key={i + '_tableOptions'} value={this.props.tableNames[i]}>{this.props.tableNames[i]}</option>)
    }

      const tableArray = [
        <TableDisplay
          getThunkTable={this.props.getThunkTable}
          key={this.props.currentTable}
          currentTable={this.props.currentTable}
          uri={this.props.uri}
          data={this.props.data}
          // reRender={this.reRender}
        />
      ];
    return (
      <div>
      <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/stats">Stats</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/auth/logout">Logout</a></li>
            </ul>
        </nav>
  <div class="flex">
    <header>
        <h1>Dashboard</h1>
    </header>
        <span>
          <label>Place URI Here:</label>
          <input
            id="uri"
            style={inputStyle}
            placeholder="progres://"
          ></input>
          <button onClick={() => {
            // console.log(document.querySelector('#uri').value)
            this.props.getUri(document.querySelector('#uri').value)
            // console.log('uri', )
            this.props.getThunkName(store.getState().data.uri)
            console.log('after thunkName')
          }}>Get Tables</button>
        </span>
        <br />
        <span>
          <label>Table Name</label>
          <select id="selectedTable" style={inputTableStyle}>
            {tableOptions}
          </select>
          <button id="load" onClick={() => this.props.getThunkTable()}>Get Data</button>
        </span>
        <br/>
            {/* <span><label>Delete a Row (Insert id):</label>
            <input style={inputTableStyle} id='deleteRow'></input>
            <button onClick={this.deleteRow}>Delete</button> */}
            {/* </span> */}
        <h2>{this.props.currentTable}</h2>
        <div>{tableArray}</div>
      </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
