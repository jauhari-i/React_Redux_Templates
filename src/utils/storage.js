const EXPIRE_TIME_STORAGE = 'your_app_expire_time';
const SESSION_TIME = 'your_app_session_time';
const TOKEN_STORAGE = 'your_app_access_token';
const USER_DATA_STORAGE = 'your_app_user_data';

export function setToken(value) {
  localStorage.setItem(TOKEN_STORAGE, value);
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function clearStorages() {
  localStorage.removeItem(TOKEN_STORAGE);
  localStorage.removeItem(EXPIRE_TIME_STORAGE);
  localStorage.removeItem(USER_DATA_STORAGE);
  localStorage.removeItem(SESSION_TIME);
}

export function setExpireTime(value) {
  localStorage.setItem(EXPIRE_TIME_STORAGE, value * 1000);
}

export function checkExpireTime() {
  const time = new Date().getTime();
  const expire = localStorage.getItem(EXPIRE_TIME_STORAGE) || 0;

  return time > expire;
}

export function setUserData(value) {
  localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(value));
}

export function getUserData() {
  const retval = localStorage.getItem(USER_DATA_STORAGE);

  return JSON.parse(retval) || '';
}

export function setSessionTime(value) {
  localStorage.setItem(SESSION_TIME, value);
}

export function getSessionTime() {
  const retval = localStorage.getItem(SESSION_TIME);

  return parseInt(retval) || 0;
}
