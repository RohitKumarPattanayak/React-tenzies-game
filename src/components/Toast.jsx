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
        <h1>Turns : {props.turn}</h1>
        <h4>Time : under development</h4>
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
