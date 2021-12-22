import "./App.css";
import SideBar from "./components/Header";
import Home from "./containers/Home";
import Table from "./containers/Table";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  const { Header, Content } = Layout;

  return (
    <Router>
      <Header>
        <SideBar />
      </Header>
      <Content style={{ margin: "50px" }}>
        <Switch>
          <Route exect path="/" element={<Home />} />
          <Route path="/Table" element={<Table />} />
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
