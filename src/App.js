import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import CreateBlog from './CreateBlog/CreateBlog';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="app">

        <Router>
          <Switch>

            <Router path="/login">
              <Login/>
            </Router>

            <Router path="/signUp">
              <SignUp/>
            </Router>

            <Route path="/create">
                <Header/>
                <CreateBlog/>
            </Route>

            <Route path="/">
              <Header/>
              <Body/>
            </Route>

            </Switch>
        </Router>

    </div>
  );
}

export default App;
