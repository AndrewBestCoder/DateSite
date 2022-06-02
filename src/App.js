import React from "react";
import Feed from "./Components/pages/feed/feed";
import Main from "./Components/pages/main/main";
import About from "./Components/pages/about/about";
import Messenger from "./Components/pages/messenger/messenger";
import Registration from "./Components/pages/registration/registration";
import Profile from "./Components/pages/profile/profile";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Authorization from "./Components/pages/authorization/authorization";





function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/authorization">
          <Authorization/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/feed">
          <Feed/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/messenger">
          <Messenger/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
