import { combineReducers } from 'redux'
import userReducer from './user.reducer' // Import du réducteur utilisateur

// Combine les réducteurs ici
const rootReducer = combineReducers({
  user: userReducer, // Ajout de userReducer
})

export default rootReducer
