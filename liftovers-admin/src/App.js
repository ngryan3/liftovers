import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";
import Home from "./routes/home";
import Volunteers from "./routes/volunteer";
import { AdminLayout } from "./components/admin";

const openPages = ["/", "/login"];
console.log(window.location.pathname);
let open = openPages.includes(window.location.pathname);
function App() {
  return (
    <Router>
      {open ? (
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <AdminLayout>
          <Route exact path="/volunteers">
            <Volunteers />
          </Route>
          </AdminLayout>
        </Switch>
      )}
    </Router>
  );
}

export default App;

