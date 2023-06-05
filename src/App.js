import { useState } from "react";

import ErrorModal from "./components/ErrorModal.js";
import UserForm from "./components/UserForm.js";
import UserList from "./components/UserList.js";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [ ...prevUsers, user ];
    });
  };

  const hideModalHandler = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <UserForm onShowError={setErrorMessage} onAddUser={addUserHandler} />
      {errorMessage !== "" && (
        <ErrorModal errorMessage={errorMessage} onHide={hideModalHandler} />
      )}
      <UserList users={users} />
    </div>
  );
};

export default App;
