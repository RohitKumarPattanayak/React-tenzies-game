import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function Login() {
  const defaultValues = {
    name: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  console.log(formValues);
  return (
    <div>
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
        <Button variant="contained" color="info" type="submit">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default Login;
