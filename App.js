import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import UpdateBank from "./components/updatebank";
import Login from "./components/login";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import Bank from "./components/bank";
import Update from "./components/update";
import InsertBank from "./components/insertbank";

import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/update" component={Update} />
        <Route path="/bank/updateBank/:id" component={UpdateBank} />
         <Route path="/bank/insertBank" component={InsertBank} /> 
         
        <Route path="/bank" component={Bank} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;