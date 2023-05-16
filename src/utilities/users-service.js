import * as userAPI from './users-api';

export function logOut() {
    localStorage.removeItem('token');
}

export async function signUp(userData) {
    const token = await userAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
}

export async function login(credentials){
    const token = await userAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export async function addFavorite(id, userId){
    const favorites = await userAPI.addFavorite(id, userId);
    return favorites;
}

export async function getFavorites(userId){
    const favorites = await userAPI.getFavorites(userId);
    return favorites;
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function checkToken() {
    return userAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}