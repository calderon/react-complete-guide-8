import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Box from "./Box";

import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (evt) => {
    setUsername(evt.target.value);
  };

  const ageChangeHandler = (evt) => {
    setAge(evt.target.value);
  };

  const userFormSubmitHandler = (evt) => {
    evt.preventDefault();

    if (username === "" || age === "") {
      props.onShowError("Please enter a valid name and age (non-empty values)");
      return;
    }

    if (parseInt(age) < 0) {
      props.onShowError("Please enter a valid age (> 0)");
      return;
    }

    props.onAddUser({
      id: uuidv4(),
      username,
      age,
    });

    setUsername("");
    setAge("");
  };

  return (
    <Box>
      <form onSubmit={userFormSubmitHandler}>
        <div className="userForm__field">
          <label htmlFor="username" className="userForm__label">
            Username
          </label>
          <input
            id="username"
            className="userForm__input"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="userForm__field">
          <label htmlFor="age" className="userForm__label">
            Age (years)
          </label>
          <input
            id="age"
            className="userForm__input"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>
        <button className="userForm__button" type="submit">
          Add User
        </button>
      </form>
    </Box>
  );
};

export default UserForm;
