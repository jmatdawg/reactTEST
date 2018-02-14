import React, {Component, Fragment} from 'react';
import Films from './Films';
import People from './People';
import { BrowserRouter, Link, Switch, Route } from 'react-browser-router';
import './App.css';

class App extends Component {
    renderLinks() {
        return(
            <Fragment>
                <div className=" w-50 mx-auto bg-light border">
                    <div className="page-header text-center bold">
                    <h1 className="fantasy">StudioGhibliApp</h1>
                </div>
                <div className ="d-flex p-3 justify-content-around">
                    <Link to = "/films"> Wanna see Films? </Link>
                    <Link to = "/people"> What about People? </Link>
                </div>
                </div>
                
            </Fragment>
        )}

    render() {
        return (
            
                <BrowserRouter> 
                    <Fragment>
                    { this.renderLinks() }
                        <Switch>    
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/people" component={People} />
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            )}
        }

export default App;