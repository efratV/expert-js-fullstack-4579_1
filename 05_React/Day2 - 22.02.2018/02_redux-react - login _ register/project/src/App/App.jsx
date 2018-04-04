/*

1) dispatch is added by default to this.props
2) what is the usage of the global "alert" object
3) history - what is it, and why is it used in the Router
4) history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
    });
*/ 

import React,{ Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("Our Test To this.props",this.props);
        /*
        output:
        ------------------------------
        Our Test To this.props 
        {alert: {…}, dispatch: ƒ}
        */

        const { dispatch } = this.props;

        /*
        NOTE: you cant add property to this.props
        -----------------------------------------
        //Uncaught TypeError: Cannot add property test, object is not extensible
        //this.props.test="?";
        */

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }


    //to use the "Router" add run the follwing command in the cli:
    //npm install --save react-router-dom
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                       
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("App - mapStateToProps",state);
    const { alert } = state;


    //a way to add property to the props
    //the var name - is the key
    //the var value - is the value
    const fullName="Zohar";
    return {
        alert,
        fullName,  //fullName:"Zohar"
        age:30
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 