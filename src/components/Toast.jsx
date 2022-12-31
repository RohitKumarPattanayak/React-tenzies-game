import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Toast(props) {
  const notify = () =>
    toast("Wow!! Congratulations!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const Msg = () => {
    return (
      <center>
        <h1>Your score:</h1>
        <hr />
        <h3>Turns : {props.turn}</h3>
        <h3>Time : {localStorage.getItem("total_time")}</h3>
        <hr />
        <h1>Total score:</h1>
      </center>
    );
  };

  const info = () =>
    toast(<Msg />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  React.useEffect(() => {
    if (props.show) {
      notify();
      info();
    }
  }, [props.show]);

  return (
    <div>
      <ToastContainer position="center" />
    </div>
  );
}
