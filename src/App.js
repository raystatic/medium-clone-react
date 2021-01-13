import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog/CreateBlog';

function App() {
  return (
      <Router>
        <div className="app">

          <Switch>

            <Route path="/create">
                <Header/>
                <CreateBlog/>
            </Route>

            <Route path="/">
              <Header/>
              <Body/>
            </Route>

          </Switch>

        </div>
      </Router>
  );
}

export default App;
