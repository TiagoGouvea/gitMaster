import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import RepoView from './repoView';
import RepoList from './repoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"}
                         className="App-logo" alt="logo"/>
                    <h1 className="App-title">Git Master</h1>
                </header>
                <div className="App-intro">
                    <BrowserRouter>
                        <div>
                            <Route path={'/'} exact component={RepoList}/>
                            <Route path={'/repo/:user/:name'} component={RepoView}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
