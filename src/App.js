import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Constants/Header";
import Nav from "./Constants/Nav";
import Search from "./Constants/Search";
import Homepage from "./Pages/Homepage";
import styled from "styled-components";
import Categories from "./Pages/Categories";
import QueriedItems from "./Pages/QueriedItems";
import { UserContext } from "./Constants/UserContext";
import Account from "./Pages/Account";
const AppLayout = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  grid-template-rows: 20vh 20vh 60vh;
  grid-template-areas:
    "header header header header"
    "search search search search"
    "switch switch switch switch";
`;

const StyledSwitch = styled.section`
  grid-area: switch;
`;

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppLayout>
        <BrowserRouter>
          <Header className="header" />
          <Nav navVisible={navVisible} setNavVisible={setNavVisible} />
          <Search setNavVisible={setNavVisible} />
          <StyledSwitch>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/categories">
                <Categories />
              </Route>
              <Route exact path="/items/:searchTerm">
                <QueriedItems />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
            </Switch>
          </StyledSwitch>
        </BrowserRouter>
      </AppLayout>
    </UserContext.Provider>
  );
}

export default App;
