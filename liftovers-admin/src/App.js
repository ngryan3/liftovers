import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Volunteers from "./routes/volunteer";
import CreateVolunteers from "./routes/volunteer/create/create";
import EditVolunteers from "./routes/volunteer/edit/edit";
import ViewVolunteers from "./routes/volunteer/view/view"
import DeleteVolunteers from "./routes/volunteer/delete/delete";
import Admins from "./routes/admin";
import CreateAdmin from "./routes/admin/create/create"
import Lifts from "./routes/lift";
import Donors from "./routes/donor";
import CreateDonor from "./routes/donor/create/create";
import Providers from "./routes/provider";
import CreateProvider from "./routes/provider/create/create";
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
            <Route path="/volunteers/view/:volunteer_id" component={Volunteers}>
                <ViewVolunteers />
            </Route>
            <Route path="/volunteers/edit/:volunteer_id" component={Volunteers}>
                <EditVolunteers />
            </Route>
            <Route path="/volunteers/delete/:volunteer_id" component={Volunteers}>
                <DeleteVolunteers />
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
            <Route exact path="/donors/create">
                <CreateDonor />
            </Route>
            <Route exact path="/providers">
                <Providers />
            </Route>
            <Route exact path="/providers/create">
                <CreateProvider />
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
