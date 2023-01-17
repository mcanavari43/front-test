import { GET_SINCE,GET_USER_DETAIL,GET_USER_REPO,GET_USERS,LOADING,LOADING_FINISH } from "../actions";

const initialState = {
    userDetail: {},
    userSince: [],
    userRepo: [],
    users: [],
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SINCE:
            return{
                ...state,
                userSince: action.payload
            }
        case GET_USER_DETAIL:
            // const allUsers = state.users
            // const userInfo = allUsers.filter(u => u.users.includes(action.payload))
            return{
                ...state,
                userDetail: action.payload
            }
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case GET_USER_REPO:
            return{
                ...state,
                userRepo: action.payload
            }
            case LOADING:
                return {
                    ...state,
                    loading: true
                }
                case LOADING_FINISH:
                    return {
                        ...state,
                        loading: false
                    }
        default:{
            return state;
        }
    }
}
export default rootReducer;