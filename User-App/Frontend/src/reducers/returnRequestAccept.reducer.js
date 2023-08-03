import { acceptReturnRequestConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false 
}

export default (state = initState, action) => {
    switch(action.type){
        case acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case acceptReturnRequestConstants.ACCEPT_RETURN_REQUEST_FAILURE:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
               
    }

    return state;
}


