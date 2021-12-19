import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import Bank from "./components/bank";
import InsertBank from "./components/insertbank";
import BankUpdate from "./components/bankupdate";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/bank/insertBank" component={InsertBank} />
        <Route path='/bank/updateBank/:bankId' component={BankUpdate}/> 
         <Route path="/bank" component={Bank} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
      </Router>
  );
}

export default App;