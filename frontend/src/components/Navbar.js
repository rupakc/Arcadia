import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Comics from './Comics.js';
import Miscellaneous from './Miscellaneous.js';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       <Router>
          <div>
            <a href="#" className="nes-badge" style={{float: "left", padding: "30px", marginTop:"20px", marginBottom:"auto"}}>
                <span className="is-error"> <Link to={'/'}>Home</Link> </span>
            </a>
            <a href="#" className="nes-badge" style={{float: "left", padding: "40px", marginTop:"20px", marginBottom:"auto"}}>
                <span className="is-success"> <Link to={'/misc'}> Miscellaneous </Link> </span>
            </a>
            <a href="#" className="nes-badge" style={{float: "left", padding: "50px", marginTop:"20px", marginBottom:"auto"}}>
                <span className="is-warning"> <Link to={'/comics'}> Comics </Link> </span>
            </a>
              <a href="//git.corp.adobe.com/rupachak/Arcadia" target="_blank">
                <i className="nes-octocat animate" style={{float:"right",padding:0,margin:0}}></i>
              </a>
              <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/comics' component={Comics} />
                   <Route exact path='/misc' component={Miscellaneous} />
              </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Navbar
