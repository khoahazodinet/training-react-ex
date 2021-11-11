import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// component
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path='/detail' component={DetailPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
