import { FETCH_TRANSACTION } from "../Actions/transaction.action";

const initialState = {
  Transaction: {
    ID: null,
    Date: null,
    Description: null,
    Amount: null,
    Balance: null,
    TransactionType: null,
    Category: null,
    Note: null,
    AccountId: null,
  },
};

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSACTION:
        return {
            ...state,
            Transaction: action.payload,
        };
        default:
        return state;
    }
    }
    ;
