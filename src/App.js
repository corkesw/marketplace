import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from './Constants/Header';
import Nav from './Constants/Nav';
import Search from './Constants/Search';
import Homepage from './Pages/Homepage';
import styled from 'styled-components';

const AppLayout = styled.body`
  display:grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  grid-template-rows: 20vh 20vh 60vh;
  grid-template-areas:
    "header header header header"
    "nav search search search"
    "nav switch switch switch"
`;



function App() {
  return (
    <AppLayout>
    <BrowserRouter>
      <Header className="header"/>
      <Nav />
      <Search />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    
    </BrowserRouter>
    </AppLayout>
  );
}

export default App;
