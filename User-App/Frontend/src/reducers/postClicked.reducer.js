import { postClickedConstants } from "../actions/constants"
 
const initState = {
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        case postClickedConstants.POST_CLICKED_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;

        case postClickedConstants.POST_CLICKED_SUCCESS:
            state = {
                ...initState,
                loading : false
            }
            break;

        case postClickedConstants.POST_CLICKED_SUCCESS:
            state = {
                ...state,
                loading : false,
                error : action.payload.error
            }
            break;
            
    }

    return state;
}