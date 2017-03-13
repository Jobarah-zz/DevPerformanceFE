import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';

class App extends Component {
    render() {
        return(
            <div>
                <div className="navbar-wrap">
                    <NavBar />
                </div>
                <main className="container">
                    <Header department="FRONT-END DEVELOPMENT" />
                </main>
            </div>
        );
    }
}

export default App;
