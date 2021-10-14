import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Constants/UserContext";
import axios from "axios";

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(user);

  useEffect(() => {
    axios
      .get("https://nc-marketplace.herokuapp.com/api/users")
      .then((res) => {
        setUserList(() => {
          return res.data.users;
        });
      })
      .then(() => {
        console.log(userList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <p>Username: {user}</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e, "select button");
          setUser(selectedUser);
        }}
      >
        <select
          id="user-select"
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
        >
          {userList.map((user) => {
            return <option value={user.username}>{user.username}</option>;
          })}
        </select>
        <button type="submit">Select User!</button>
      </form>
    </section>
  );
};

export default Account;
