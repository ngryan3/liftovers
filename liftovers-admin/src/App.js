import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Volunteers from "./routes/volunteer";
import Admins from "./routes/admin";
import CreateAdmin from "./routes/admin/create/create"
import Lifts from "./routes/lift";
import CreateVolunteers from "./routes/volunteer/create/create";
import Donors from "./routes/donor";
import Providers from "./routes/provider";
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
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <AdminLayout>
          <Route exact path="/dashboard">
              <Dashboard />
           </Route> 
            <Route exact path="/volunteers">
              <Volunteers />
            </Route>
            <Route exact path="/lifts">
              <Lifts />
            </Route>
            <Route exact path="/volunteers/create">
                <CreateVolunteers />
            </Route>
            <Route exact path="/admins">
                <Admins />
            </Route>
            <Route exact path="/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/donors">
                <Donors />
            </Route>
            <Route exact path="/providers">
                <Providers />
            </Route>
            {/* <Route exact path="/lifts">
              <Lifts />
            </Route> */}
          </AdminLayout>
        </Switch>
      )}
    </Router>
  );
}

export default App;
