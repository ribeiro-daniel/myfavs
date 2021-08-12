import Home from "./pages/Home/index";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
