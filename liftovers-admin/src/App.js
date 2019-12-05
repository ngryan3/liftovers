import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./routes/profile";
import EditProfile from "./routes/profile/edit/edit";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Volunteers from "./routes/volunteer";
import CreateVolunteers from "./routes/volunteer/create/create";
import EditVolunteers from "./routes/volunteer/edit/edit";
import ViewVolunteers from "./routes/volunteer/view/view";
import DeleteVolunteers from "./routes/volunteer/delete/delete";
import Admins from "./routes/admin";
import CreateAdmin from "./routes/admin/create/create";
import EditAdmin from "./routes/admin/edit/edit";
import ViewAdmin from "./routes/admin/view/view";
import DeleteAdmin from "./routes/admin/delete/delete";
import Lifts from "./routes/lift";
import Donors from "./routes/donor";
import CreateDonor from "./routes/donor/create/create";
import EditDonor from "./routes/donor/edit/edit";
import ViewDonor from "./routes/donor/view/view";
import DeleteDonor from "./routes/donor/delete/delete";
import Providers from "./routes/provider";
import CreateProvider from "./routes/provider/create/create";
import EditProvider from "./routes/provider/edit/edit";
import ViewProvider from "./routes/provider/view/view";
import DeleteProvider from "./routes/provider/delete/delete";
import { AdminLayout } from "./components/admin";
import Forgot from "./routes/login/forgot";
import Reset from "./routes/login/resetpassword";
import About from "./routes/about/about"

const openPages = ["/", "/login", "/signup", "/forgot"];
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
          <Route exact path="/forgot">
            <Forgot />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/reset/:token" component={Reset}/>
          <AdminLayout>
          <Route exact path="/profile">
              <Profile />
          </Route>
          <Route exact path="/profile/edit">
              <EditProfile />
          </Route>
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
            <Route path="/admins/view/:admin_id" component={Admins}>
                <ViewAdmin />
            </Route>
            <Route path="/admins/edit/:admin_id" component={Admins}>
                <EditAdmin />
            </Route>
            <Route path="/admins/delete/:admin_id" component={Admins}>
                <DeleteAdmin />
            </Route>
            <Route exact path="/donors">
                <Donors />
            </Route>
            <Route exact path="/donors/create">
                <CreateDonor />
            </Route>
            <Route path="/donors/view/:donor_id" component={Donors}>
                <ViewDonor />
            </Route>
            <Route path="/donors/edit/:donor_id" component={Donors}>
                <EditDonor />
            </Route>
            <Route path="/donors/delete/:donor_id" component={Donors}>
                <DeleteDonor />
            </Route>
            <Route exact path="/providers">
                <Providers />
            </Route>
            <Route exact path="/providers/create">
                <CreateProvider />
            </Route>
            <Route path="/providers/view/:provider_id" component={Providers}>
                <ViewProvider />
            </Route>
            <Route path="/providers/edit/:provider_id" component={Providers}>
                <EditProvider />
            </Route>
            <Route path="/providers/delete/:provider_id" component={Providers}>
                <DeleteProvider />
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
