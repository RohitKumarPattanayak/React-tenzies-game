import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

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
  async function scoreUpdate() {
    let score =
      (300 -
        (Number(props.turn) + Number(localStorage.getItem("total_time")))) *
      10;
    console.log("score : ", score);
    let name = localStorage.getItem("current_user");
    let result = await axios({
      method: "put",
      url: `${import.meta.env.VITE_HOST}/putUserDetails/${name}/${score}`,
    });
  }
  const Msg = () => {
    let score =
      (300 -
        (Number(props.turn) + Number(localStorage.getItem("total_time")))) *
      10;
    return (
      <center>
        <h2>YOUR SCORE : </h2>
        <hr />
        <h4>Turns : {props.turn}</h4>
        <h4>Time : {localStorage.getItem("total_time")}</h4>
        <hr />
        <h3>
          TOTAL SCORE :<span style={{ color: "yellow" }}> {" " + score}</span>
        </h3>
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

  const userPass = () => {
    toast.success("user created successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const userFail = () => {
    toast.warn("user name should be unique", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  React.useEffect(() => {
    if (props.show) {
      notify();
      info();
      scoreUpdate();
    }

    if (props.userCheck === 0) {
      userFail();
    } else if (props.userCheck === 1) {
      userPass();
    }
  }, [props.show, props.userCheck]);

  return (
    <div>
      <ToastContainer position="center" />
    </div>
  );
}
