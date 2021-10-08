import { Redirect, Route, Switch } from "react-router";
import Customers from "./components/customers";
import { Movies } from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found"
import NavBar from "./components/navbar"
function App() {
  return (
    <main className="container-fluid">
    <NavBar/>
    <Switch>
    <Route path="/movies" component={Movies}/>
    <Route path="/customers" component={Customers}/>
    <Route path="/rentals" component={Rentals}/>
    <Route path="/not-found" component={NotFound}/>
    <Redirect from="/" exact to="/movies"/>
    <Redirect to="/not-found"/>
    </Switch>
    </main>
  );
}

export default App;
