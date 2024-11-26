import { FETCH_USER ,UPDATE_USER,RESET_USER } from "../Actions/user.action";

const initialState = {
  user: {
    userName: null,
    firstName: null,
    lastName: null
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
        
        case 'RESET_USER':
          return initialState;
    default:
      return state;
  }
}
