import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class HomePage extends React.Component {

    render() {
        const { user } = this.props;

        if (user) {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React!!</p>
                    <p>
                        <Link to="/managmentSystem/login">Logout</Link>
                    </p>
                </div>
            );
        }


        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi Guest!</h1>
                <p>Please log in with React!!</p>
                <p>
                    <Link to="/managmentSystem/register" className="btn btn-link">Register</Link>
                </p>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { user } = authentication.state;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };