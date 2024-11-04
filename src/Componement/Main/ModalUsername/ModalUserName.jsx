import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../Actions/user.action';

export default function ModalUserName() {
    const dispatch = useDispatch();
    const userselec = useSelector((state) => state.user);
    const [UserNames, setUserName] = useState('');

    useEffect(() => {
        setUserName(userselec.user.userName || '');
    }, [userselec.user.userName]);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateUser(UserNames));
    };

    const handleClickClose = (e) => {
        e.preventDefault();
        const modalUsername = document.querySelector('.modalUsername');
        modalUsername.style.display = 'none';
    };

    return (
        <>
            <form action="" className='modalUsername'>
                <div>
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        onChange={(e) => setUserName(e.target.value)}
                        value={UserNames}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={userselec.user.firstName || ''}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={userselec.user.lastName || ''}
                        disabled
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleEdit}>Save change</button>
                    <button type="reset" onClick={handleClickClose}>Cancel</button>
                </div>
            </form>
        </>
    );
}
