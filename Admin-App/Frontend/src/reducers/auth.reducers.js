import { authConstants } from "../actions/constants"
 
const initState = {
    // name : 'Akshay !!'
    token : null,
    user :  {
        firstName : '',
        lastName : '',
        email : '',
        _id : '',
        fullName : '',
        role : ''
    },
    authenticate : false,
    authenticating : false,

    loading : false,
    error : null ,
    message : ''
}

export default ( state = initState , action ) => {

    console.log(action);

    switch(action.type) {
        case authConstants.LOGIN_REQUEST :
            state = {
                ...state,
                // ...action.payload
                authenticating : true
            }
            break;
        
        case authConstants.LOGIN_SUCCESS :
            state = {
                ...state,   // first spread the previous state   so that we can override the previous state 
                // ...action.payload,
                user : action.payload.user,
                token : action.payload.token,
                authenticating : false,
                authenticate : true
            }
            break;
        
        case authConstants.LOGOUT_REQUEST : 
            state = {
                ...state,
                loading : true
            }
            break;

        case authConstants.LOGOUT_SUCCESS : 
            state = {
                ...initState,
                loading : false
            }
            break;

        case authConstants.LOGOUT_FAILURE : 
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
    }

    return state;
}