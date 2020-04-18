import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./home/HomePage";

export default function App() {
    return (
        <Router basename="/businessmanagement">
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>


            </Switch>
        </Router>
    );
}