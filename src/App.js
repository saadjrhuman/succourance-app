import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/HomePage";
import VolunteerPage from "./pages/volunteer/VolunteerPage";
import CallPage from "./pages/call/CallPage";

function App() {
  return (
    <div className="App">
      <Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/volunteer" component={VolunteerPage} />
          <Route exact path="/call" component={CallPage} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
