import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Constants/UserContext";
import axios from "axios";
import { getBasket, getBasketPrice } from "../utils/getBasket";

const Account = () => {
  const { user, setUser, setBasket, setBasketPrice, basket } =
    useContext(UserContext);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(user);
  const [inputUsername, setInputUsername] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [newUser, setNewUser] = useState({});

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

  useEffect(() => {
    console.log(newUser, "newUser");
    axios({
      method: "post",
      url: "https://nc-marketplace.herokuapp.com/api/users",
      data: newUser,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newUser]);
  return (
    <section>
      <p>Username: {user}</p>
      <form
        id="log-in-form"
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(e, "select button");
          await setUser(selectedUser);
          await setBasket(() => {
            console.log(selectedUser)
            return getBasket(selectedUser);
          });
          await setBasketPrice(() => {
            console.log(basket, "in the account");
            return getBasketPrice(basket);
          });
        }}
      >
        <select
          id="user-select"
          value={selectedUser}
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select User
          </option>
          {userList.map((user) => {
            return (
              <option key={user.username + Math.random()} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        <button type="submit">Select User!</button>
      </form>

      <h2>Sign Up!</h2>
      <form
        id="sign-up-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNewUser(() => {
            return {
              username: inputUsername,
              avatar_url: inputURL,
            };
          });
        }}
      >
        Username:{" "}
        <input
          type="text"
          required
          placeholder="Enter Username"
          onChange={(e) => {
            setInputUsername(e.target.value);
          }}
        />
        <br />
        Avatar Url:{" "}
        <input
          type="url"
          placeholder="Paste URL here"
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
        />
        <button>Create Account</button>
      </form>
    </section>
  );
};

export default Account;
