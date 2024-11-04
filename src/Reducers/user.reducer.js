import { FETCH_USER } from "../Actions/user.action";
import { UPDATE_USER } from "../Actions/user.action";
const initialState = {
  user: {
    userName: '',
    firstName: '',
    lastName: ''
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
   
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,  
        
      };
      case UPDATE_USER:
        return {
          ...state,
          user: action.payload,
        };
    
    default:
      return state;
  }
}
