import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Product } from "./components";
import { Header } from "./components/layout/header";
import { NotificationBar } from "./components/notification";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
      <NotificationBar />
    </Router>
  );
};

export default App;
