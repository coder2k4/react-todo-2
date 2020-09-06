import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import AlertState from "./Context/alert/alert.state";
import Alert from "./Components/Alert";
import FirebaseState from "./Context/firebase/firebase.state";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Switch>
                        <>
                            <Navbar/>
                            <div className="container">
                                <Alert/>
                                <Route path={'/'} component={Home} exact/>
                                <Route path={'/about'} component={About}/>
                            </div>
                        </>
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
