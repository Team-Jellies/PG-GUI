import React, { Component } from 'react';
import InputCell from './InputCells.js';

class Row extends Component {
  constructor(props) {
    super(props);


    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(event) {
    const PK = Object.keys(this.props.dataObj)
    // const reRender = this.props.reRender;
    // const uri = this.props.uri;
    const tableName = this.props.tableName
    
    if (event.key === '?') {
      const columnName = event.target.name;
      const query = event.target.placeholder;
      const filterString = `SELECT * FROM ${tableName} WHERE ${columnName} = '${query}'`

      // reRender(filterString)
      this.props.getThunkTable(filterString);
      
      
    }

    if (event.key === '/') {
      const columnName = event.target.name;
      const query = event.target.placeholder;
      const filterString = `SELECT * FROM ${tableName} WHERE ${columnName} != '${query}'`

      // reRender(filterString)
      this.props.getThunkTable(filterString);
    }

    if (event.key === 'Enter') {
     
      const newValue = event.target.value;
      const PKValue = this.props.dataObj[PK];
      const columnName = event.target.name;
      let queryString;
      
      if (isNaN(newValue)) {
        queryString = `UPDATE ${tableName} SET ${columnName} = '${newValue}' WHERE ${PK} = ${PKValue}`;
      } else {
        queryString = `UPDATE ${tableName} SET ${columnName} = ${Number(newValue)} WHERE ${PK} = ${PKValue}`;
        }

      // const test = new Promise(() => this.props.getThunkTable(queryString)).then(() => {
      //   console.log('does this click?')
      //   document.querySelector('#load').click()})
      // const test2 = new Promise(() => this.props.getThunkTable());
      // test

      // async function test() {
      //   return this.props.getThunkTable(queryString)
      // }

      // test.then(()=> console.log('g'))

     this.props.getThunkTable(queryString);
      // }
      // getData()

      // fetch('/server/update', {
      //   method: 'POST',
      //   body: JSON.stringify({ uri, queryString }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      //     }).then(data => reRender())
    }
  
  }

  render() {
    console.log('dataObj ', this.props.dataObj);
    console.log('dataArr', this.props.dataArr);
    // const columns = Object.keys(this.props.dataObj);
    const rowsArr = [];
      Object.keys(this.props.dataObj).forEach((key, i) => {
        rowsArr.push(
          <InputCell
            key={i + '_inputCell'}
            data={this.props.dataObj[key]}
            column={key}
            onEnter={this.onEnter}
          />
        );

      
    });

    return <div>{rowsArr}</div>;
  }
}

export default Row;
