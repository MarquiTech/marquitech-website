import { Component } from "react";
import './App.css';
import './Assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import HomePage from "./components/Pages/Home/Index";
import AboutUs from "./components/Pages/AboutUs/index";



const history = createBrowserHistory();
class App extends Component {
  state = {};
  componentDidMount() {
    
  }
  render() {
    return (
      <>
          <>
            <Router history={history}>
              <Routes>
                <Route path={"/"} element={<HomePage />} exact />
                <Route path={"/aboutus"} element={<AboutUs />} exact />
              </Routes>
            </Router>


          </>
      </>
    );
  }
}

export default App;
