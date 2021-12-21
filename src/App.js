import "./App.css";
import SideBar from "./components/Headder";
import Home from "./containers/Home";
import Table from "./containers/Table";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exect path="/" element={<Home />} />
        <Route path="/Table" element={<Table />} />
      </Switch>
    </Router>
  );
}

export default App;
