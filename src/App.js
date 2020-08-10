import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Welcome from "./components/Welcome";
import Shell from "./components/Shell";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import CreateList from "./components/lists/CreateList";
import SingleList from "./components/lists/SingleList";
const App = (props) => {
  const auth = useSelector((state) => state.firebase.auth);

  const renderApp = (authData) => {
    return (
      <BrowserRouter>
        <div className='App'>
          <Shell>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/sign-up' component={SignUp} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/create-list' component={CreateList} />
              <Route exact path='/list/:id' component={SingleList} />
            </Switch>
          </Shell>
        </div>
      </BrowserRouter>
    );
  };

  return renderApp(auth);
};

export default App;
