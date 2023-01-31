import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import axios from "axios";
function Login() {
  localStorage.setItem("current_user", "");
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [userApprove, setUserApprove] = useState(-1);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  async function onSubmitHandler() {
    let user = { data: formValues };
    localStorage.setItem("current_user", formValues.name);
    let result = await axios({
      method: "post",
      url: `${import.meta.env.VITE_HOST}/createUser`,
      data: user,
    });
    if (result.status === 201) {
      navigate("/game");
    } else {
      setUserApprove(0);
    }
  }
  return (
    <div>
      <Toast userCheck={userApprove} />
      <Button
        style={{ position: "absolute", right: "3%", background: "white" }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Leaderboard
      </Button>
      <img
        className="tenzi-logo-login"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkGPOfCPc2nKYrqkIsw3C8trJ2Pw9csIY7PyOddBQNfI7SvNVwSDWuAtpM75qE8-6_VI&usqp=CAU"
        }
      ></img>
      <div className="form">
        <TextField
          id="post-title-input"
          name="name"
          label="User name"
          type="text"
          value={formValues.title}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button
          onClick={onSubmitHandler}
          variant="contained"
          color="info"
          type="submit"
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default Login;
