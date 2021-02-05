import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header.component'

import About from '../../pages/about/about.page';
import Home from '../../pages/home/home.page';

// common css
import '../../common/styles'
import './app.component.css'
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;