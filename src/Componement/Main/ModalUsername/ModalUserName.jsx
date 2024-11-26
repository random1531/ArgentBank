import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../Actions/user.action";
import "./modaluser.css";

export default function ModalUserName() {
  const dispatch = useDispatch();
  const userselec = useSelector((state) => state.user);
  const [UserNames, setUserName] = useState("");

  useEffect(() => {
    setUserName(userselec.user.userName || "");
  }, [userselec.user.userName]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateUser(UserNames));
  };

  const handleClickClose = (e) => {
    e.preventDefault();
    const modalUsername = document.querySelector(".modalUsername");
    modalUsername.style.display = "none";
  };

  return (
    <>
      <form action="" className="modalUsername">
        <div className="user_form">
          <label className="label_user" htmlFor="userName">
            Username:
          </label>
          <input
            className="input_user"
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => setUserName(e.target.value)}
            value={UserNames}
          />
        </div>
        <div className="user_form">
          <label className="label_user" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="input_user input_user_disabled"
            type="text"
            name="firstName"
            id="firstName"
            value={userselec.user.firstName || ""}
            disabled
          />
        </div>
        <div className="user_form">
          <label className="label_user" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="input_user input_user_disabled"
            type="text"
            name="lastName"
            id="lastName"
            value={userselec.user.lastName || ""}
            disabled
          />
        </div>
        <div className="btn_">
          <button type="submit" className="btn_edituser" onClick={handleEdit }>
            Save
          </button>
          <button
            type="reset"
            className="btn_edituser"
            onClick={handleClickClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
