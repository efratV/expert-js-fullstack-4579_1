import { hash } from '../_helpers';

export const userService = {
    login,
    logout,
    register
};

async function login(username, password) {

    let hashUserInfo=hash(username)+hash(password);
    let res = await fetch("/api/manager/login", {
        headers: {
            'content-type': 'application/json',
            'xx-auth': hashUserInfo
        },
        method: 'GET',
    });
    let user = await res.json();
    // login successful if there's a jwt token in the response
    if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
}

function logout() {
  //TODO
}



function register(user) {
   //TODO
}
