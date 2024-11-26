import { combineReducers } from 'redux'
import userReducer from './user.reducer' 
import {accountReducer} from './account.reducer'
import {transactionReducer} from './transaction.reducer'


const rootReducer = combineReducers({
  user: userReducer, 
  account: accountReducer,
  transaction: transactionReducer,
})

export default rootReducer
