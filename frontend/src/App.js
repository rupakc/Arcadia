import React from 'react';
import "nes.css/css/nes.min.css";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Comics from './components/Comics.js';


class App extends React.Component {

	constructor(props) {
		super(props);
	}
    render() {
        return (
            <div>
						  <Navbar/>
							<Footer/>
            </div>
        )
    }
}

export default App
