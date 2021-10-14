import React from "react";
import { useContext } from "react";
import { UserContext } from "../Constants/UserContext";

const Homepage = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <h2>Welcome!</h2>
      {!user && (
        <>
          <button>Login</button>
          <button>Sign up</button>
        </>
      )}
    </section>
  );
};

export default Homepage;
