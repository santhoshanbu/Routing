import './App.css';
import Routers from './router/menu.js';
import Grosary from './router/grosorys.js';
import Mobiles from './router/mobiles.js';
import Books from './router/books.js';
import Home from './router/home.js';
import Games from './router/games.js';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className='app-container'>
      <div className='title'>
        <h1>Menu</h1>
      </div>
      <div className="App">
        <Router>
          <div className='menu'><Routers /></div>
          <div className='change-body-of-content'>
            <Switch>
              <Redirect exact from="/" to="/Home" />
              <Route path='/Mobiles' component={Mobiles} />
              <Route path='/Home' component={Home} />
              <Route path='/Grosary' component={Grosary} />
              <Route path='/Games' component={Games} />
              <Route path='/Books' component={Books} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
