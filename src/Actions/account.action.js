import axios from 'axios';

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';



export const fetchAccount = () => {
    return (dispatch) => {
        axios
        .get('../../public/db.json')
        .then((response) => {
            const Accounts = response.data.Accounts;
            dispatch({ type: 'FETCH_ACCOUNT', payload: Accounts});
        })
        .catch((error) => {
            console.error("Error fetching account:", error);
        });
    }
}