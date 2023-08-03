import { allUserConstants } from "../actions/constants"
 
const initState = {
    error: null,
    allUsers: [],
    loading: false 
}
 
export default (state = initState, action) => {
    switch(action.type) {
        case allUserConstants.ALL_USER_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case allUserConstants.ALL_USER_SUCCESS:
            state = {
                ...state,
                allUsers: action.payload.allUsers,
                loading : false
            }
            break;

        case allUserConstants.ALL_USER_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}


