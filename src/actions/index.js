import {newAction} from '../util';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const newLoginSuccessAction = () => newAction(LOGIN_SUCCESS);
const newLoginErrorAction = () => newAction(LOGIN_ERROR);

export function login (username, password){
    if(username === 'admin' && password === 'password'){
        return newLoginSuccessAction();
    }
    else{
        return newLoginErrorAction();
    }
}