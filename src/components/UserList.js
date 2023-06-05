import Box from "./Box";

import "./UserList.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return;
  }

  return (
    <Box className="users">
      <ul className="users__list">
        {props.users.map((user) => (
          <li key={user.id} className="users__item">
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default UserList;
