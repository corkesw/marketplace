import { useEffect, useState } from "react";
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
import axios from "axios";
import Basket from "./Pages/Basket";
import ItemView from "./Pages/ItemView";

const AppLayout = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  grid-template-rows: 20vh 7vh 1fr;
  grid-template-areas:
    "header header header header"
    "search search search search"
    "switch switch switch switch";
  min-height: 100vh;
`;

const StyledSwitch = styled.section`
  grid-area: switch;
  background-color: #53a548;
  /* min-height: 100%; */
`;

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [basket, setBasket] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [basketPrice, setBasketPrice] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://nc-marketplace.herokuapp.com/api/users/${user}/basket`,
    }).then((res) => {
      console.log(res, "basket", user);
      setBasket(res.data.items);
    });
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, setUser, basket, setBasket, setBasketPrice, basketPrice }}
    >
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
                <QueriedItems setSelectedItem={setSelectedItem} />
              </Route>
              <Route exact path="/account">
                <Account setBasket={setBasket} />
              </Route>
              <Route exact path="/basket">
                <Basket />
              </Route>
              <Route exact path="/item/:id">
                <ItemView selectedItem={selectedItem} setBasket={setBasket} />
              </Route>
            </Switch>
          </StyledSwitch>
        </BrowserRouter>
      </AppLayout>
    </UserContext.Provider>
  );
}

export default App;
