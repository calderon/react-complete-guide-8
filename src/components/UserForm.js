import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Box from "./Box";

import "./UserForm.css";
import Button from "./Button";

const UserForm = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const userFormSubmitHandler = (evt) => {
    evt.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;

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

    usernameRef.current.value = '';
    ageRef.current.value = '';
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
            ref={usernameRef}
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
            ref={ageRef}
          />
        </div>
        <Button type="submit">
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
