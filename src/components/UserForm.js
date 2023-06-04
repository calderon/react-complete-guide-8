import { useState } from "react";

import Box from "./Box";

import "./UserForm.css";

const UserForm = () => {
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
  };

  return (
    <Box>
      <form onSubmit={userFormSubmitHandler}>
        <div className="userForm__field">
          <label className="userForm__label">Username</label>
          <input
            className="userForm__input"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="userForm__field">
          <label className="userForm__label">Age (years)</label>
          <input
            className="userForm__input"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>
        <button className="userForm__button" type="submit">Add User</button>
      </form>
    </Box>
  );
};

export default UserForm;
