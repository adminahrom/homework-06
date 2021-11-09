import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";
import User from "./components/user";
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={User} />
                <Route path="/users" component={Users} />
            </Switch>
            <Users />
        </div>
    );
}

export default App;
