// export default ( state = { name : 'Akshay' } , action ) => {   // this is the function of the store --> 
//     // this takes 2 arguments 
//     // 1 : state (which we can initialise )
//     // 2 : action

//     return state;
// }

import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import postReducer from './post.reducer';
import allPostReducer from './getposts.reducer';
import bicycleReducer from './bicycle.reducer'
import allBicycleReducer from './getAllBicycle.reducer'
import postClickedReducer from "./postClicked.reducer";
import requestBicycleReducer from "./requestBicycle.reducer";
import allRequestsReducer from "./allRequests.reducer";

import requestAcceptReducer from "./requestAccept.reducer"
import requestDeclineReducer from "./requestDecline.reducer"

import allMyBicycleReducer from "./myBicycles.reducer"

import bicycleReturnRequestReducer from "./bicycleReturnRequest.reducer";

import allReturnRequestsReducer from "./allReturnRequests.reducer";

import returnRequestAcceptReducer from "./returnRequestAccept.reducer"
import returnRequestDeclineReducer from "./returnRequestDecline.reducer"
import allRequestedBicycleReducer from './getAllRequestedBicycles.reducer'

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer, 
    post : postReducer, 
    allPost : allPostReducer,

    bicycle : bicycleReducer,
    allBicycle : allBicycleReducer,
    postClicked : postClickedReducer,
    requestBicycle : requestBicycleReducer,

    allRequest : allRequestsReducer,

    requestAccept : requestAcceptReducer,
    requestDecline : requestDeclineReducer,
    allMyBicycle : allMyBicycleReducer,
    bicycleReturnRequest : bicycleReturnRequestReducer,
    
    allReturnRequest : allReturnRequestsReducer,

    returnRequestAccept : returnRequestAcceptReducer,
    returnRequestDecline : returnRequestDeclineReducer,
    
    allRequestedBicycle : allRequestedBicycleReducer
})

export default rootReducer;