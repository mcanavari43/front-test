import axios from 'axios'

export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const GET_USERS = 'GET_USERS';
export const GET_USER_REPO = 'GET_USER_REPO';
export const GET_SINCE = 'GET_SINCE';
export const LOADING = "LOADING"
export const LOADING_FINISH = "LOADING_FINISH"

export function getUserDetail(username){
    return async function(dispatch){
            dispatch({type: LOADING})
            let json = await axios.get(`/api/users/${username}/details`);
            dispatch({type: LOADING_FINISH})
            return dispatch({
                type: GET_USER_DETAIL,
                payload: json.data
            })
        }
}
export function getUser(){
        return async function(dispatch){
            dispatch({type: LOADING})
            let json = await axios.get(`/api/users/`);
            dispatch({type: LOADING_FINISH})
            return dispatch({
                type: GET_USERS,
                payload: json.data
            })
        }
}
export function getUserRepo(username){
        return async function(dispatch){
            dispatch({type: LOADING})
            let json = await axios.get(`/api/users/${username}/repos`)
            dispatch({type: LOADING_FINISH})
            console.log(json.data)
            return dispatch({
                type: GET_USER_REPO,
                payload: json.data
                
            })
        }
}
export function getUserSince(number){
        return async function(dispatch){
            var userSince = await axios.get(`/api/users?since=${number}`)
            return dispatch({
                type: GET_SINCE,
                payload: userSince.data
            })
        }
}
