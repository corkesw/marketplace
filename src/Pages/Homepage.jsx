import React from "react";
import { useContext } from "react";
import { UserContext } from "../Constants/UserContext";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  return (
    <section>
      <h2>Welcome!</h2>
      {!user && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push("/account");
            }}
          >
            Login
          </button>
          <button>Sign up</button>
        </>
      )}
    </section>
  );
};

export default Homepage;
