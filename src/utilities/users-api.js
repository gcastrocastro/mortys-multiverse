import sendRequest from './send-request.js';
const BASE_URL = '/api/users';

export async function signUp(userData){
    console.log('sendreq', userData);
    return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials){
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(credentials){
    return sendRequest(`${BASE_URL}/check-token`, 'GET', credentials);
}