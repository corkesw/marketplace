import React from "react";
import { useContext } from "react";
import { UserContext } from "../Constants/UserContext";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const StyledPage = styled.section`
  text-align: center`

const Homepage = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();


  return (
    <StyledPage>
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
    </StyledPage>
  );
};

export default Homepage;
