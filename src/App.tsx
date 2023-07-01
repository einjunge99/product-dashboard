import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Product } from "./components";
import { Header } from "./components/common/header";

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
    </Router>
  );
};

export default App;
