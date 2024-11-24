import React, { useEffect } from "react";
import Card from "../Componement/Main/Usercompsant/Card/Card";
import ModalUserName from "../Componement/Main/ModalUsername/ModalUserName";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../Actions/user.action";

export default function User() {
  
  const userselec = useSelector((state) => state.user);
  const isAuth = localStorage.getItem("token");

  //check si user est connecter
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      window.location = "/login";
    }
  }, [isAuth]);

  //fetch de user pour stocker dans le store
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  //ouverture de la modal
  const handleClickOpen = () => {
    const modalUsername = document.querySelector(".modalUsername");
    modalUsername.style.display = "block";
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${userselec.user.firstName} ${userselec.user.userName}`}
          </h1>
          <button className="edit-button" onClick={handleClickOpen}>
            Edit Name
          </button>
          <ModalUserName />
        </div>

        <Card Tile="Argent Bank Checking (x8349)" Amount="$2,082.79" />
        <Card Tile="Argent Bank Savings (x6712)" Amount="$10,928.42" />
        <Card Tile="Argent Bank Credit Card (x8349)" Amount="$184.30" />
      </main>
    </>
  );
}
