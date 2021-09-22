import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./login";
import Page2 from "./page2";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <Header /> */}
          <Redirect to="/delivery" />
        </Route>
        <Route exact path="/delivery" component={Login} />
        <Route exact path="/checkpayment/:card" component={Page2} />
      </Switch>
    </>
  );
}

export default App;
