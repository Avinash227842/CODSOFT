import './App.css'
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
//import Single from "./pages/single/Single";
import WritePost from "./pages/writepost/WritePost";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post">
          <Home />
        </Route>
        
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/about">
          {currentUser ? <About /> : <Register />}
        </Route>
        <Route path="/contact">
          {currentUser ? <Contact /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        {/*<Route path="/post/:id">
          <Single />
  </Route>*/}
        <Route path="/writePost">{currentUser ? <WritePost /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
