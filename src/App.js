import { useState } from "react";

import ErrorModal from "./components/ErrorModal.js";
import UserForm from "./components/UserForm.js";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const hideModalHandler = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <UserForm onShowError={setErrorMessage} />
      {errorMessage !== "" && (
        <ErrorModal errorMessage={errorMessage} onHide={hideModalHandler} />
      )}
    </div>
  );
};

export default App;
