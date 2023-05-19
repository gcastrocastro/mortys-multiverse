import sendRequest from './send-request.js';
const BASE_URL = '/api/users';

export async function signUp(userData){
    return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials){
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function addFavorite(id, userId){
    const res = await fetch(`${BASE_URL}/add-favorite/${id}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ id, userId })
    }); 

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Add Favorite');
    }
}

export async function getFavorites(userId){
    const res = await fetch(`${BASE_URL}/get-favorites?userId=${userId}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
          }
    }); 

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Get Favorite');
    }
}