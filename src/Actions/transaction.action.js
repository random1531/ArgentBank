import axios from "axios";

export const FETCH_TRANSACTION = "FETCH_TRANSACTION";

export const fetchTransaction = () => {
  return (dispatch) => {
    axios
      .get("../../public/db.json")
      .then((response) => {
        const Transactions = response.data.Transactions;
        dispatch({ type: "FETCH_TRANSACTION", payload: Transactions });
      })
      .catch((error) => {
        console.error("Error fetching account:", error);
      });
  };
};
