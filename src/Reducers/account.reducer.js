import { FETCH_ACCOUNT } from "../Actions/account.action";

const initialState = {
  Account: {
    NameAccount: null,
    Amount: null,
    ID: null,
    IdUser: null,
  },
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {
        ...state,
        Account: action.payload,
      };
    default:
      return state;
  }
};
