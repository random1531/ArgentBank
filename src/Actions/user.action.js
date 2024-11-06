import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3000/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        dispatch({ type: 'FETCH_USER', payload: response.data.body }); 
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
     
      });
  };
};

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (userName) => {
    return (dispatch) => {
        axios
        .put('http://localhost:3000/api/v1/user/profile', { userName }, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((response) => {
            dispatch({ type: 'UPDATE_USER', payload: response.data.body });
        })
        .catch((error) => {
            console.error( error);
        });
    }
}