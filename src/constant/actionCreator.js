import * as type from './actionTypes.js';

export const getUri = (uri) => ({
  type : type.GET_URI,
  payload : uri
})
// export const getThunkName = (uri) => 
//   () => {
//     console.log('ThunkName', uri)
//     return ({
//   type : type.GET_NAMES,
//   payload : uri
// })}
// export const getThunkTable = (tableNames) => 
//   () => ({
//   type : type.GET_TABLE,
//   payload : tableNames
// })
export const getTableName = (name) => ({
  type : type.GET_NAMES,
  payload : name
})
export const getTableData = (data) => ({
  type : type.GET_TABLE,
  payload : data
})
