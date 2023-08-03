// creating a centralised API 
// so that later if we want to change something we can change it here 

import axios from "axios";
import { api } from "../UrlConfig";

// z1 
import store from '../store';
import { authConstants } from "../actions/constants";

const token = window.localStorage.getItem('token');
// console.log(token);

// lets create the instance of axios 
const axiosInstance = axios.create({
    baseURL : api,
    headers : {
        'Authorization' : token ? `Bearer ${token}` : ''
    }
});
// it provide a method --> create 
// which takes an object 
// base url 


// z1 
// adding middlewares // to fix login expire issues 
axiosInstance.interceptors.request.use((req) => {
    // z1 
    // sometimes we can use the old token stored in the localstorage about timeout 
    // so update the new token in the local storage 
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

// axiosInstance.interceptors.response.use((res) => {
//     return res;
// })

// before going requests to the actions we can handle the errors here 
axiosInstance.interceptors.response.use((res) => {
    return res;
} , (error) => {
    console.log(error.response);
    const { status } = error.response;
    if (status === 500 || status === 400) {
        // we have to logout the user 
        // dispatch the action to logout the user 
        // but you were using dispatch from the components  by using useDispatch  signout
        // we are not in the components --> we cannot do the hooks here 
        // but we have store --> so we will dispatch from the store 
        localStorage.clear();
        store.dispatch({ type : authConstants.LOGOUT_SUCCESS});
    }
    return Promise.reject(error);
});


export default axiosInstance;
