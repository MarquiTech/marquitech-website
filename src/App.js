import { Component } from "react";
import './App.css';
import './Assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import HomePage from "./components/Pages/Home/Index";
// import ContactUs from "./components/Pages/ContactUs";
import { Contact } from "./components/Pages/contact/Contact";
import {Services} from "./components/Pages/services/Services"


const history = createBrowserHistory();
class App extends Component {
  state = {};
  componentDidMount() {
    
  }
  render() {
    return (
      // <>
          <>
            <Router history={history}>
              <Routes>
                <Route path={"/"} element={<HomePage />} exact />
                <Route path={"/contact"} element={<Contact />} exact />
                <Route path={"/services"} element={<Services />} exact />
              </Routes>
            </Router>


          </>
      // </>
    );
  }
}

export default App;
