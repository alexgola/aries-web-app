/**
 * Class responsible to execute authenticate and refreh the user token
 */
const instance = axios.create({
  baseURL: process.env.REACT_APP_ARIES_API_HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Authorization': `Basic ${process.env.REACT_APP_ARIES_BASIC_AUTH_VALUE}`
  }
});

const jsonObjToUrlEncoded = (obj) => {
  return Object.keys(obj).reduce((memo, key) => {
    const separator = (memo === '' ? '' : '&'); 
    return `${memo}${separator}${key}=${obj[key]}`;
  }, '');
};

export const authenticate = ({ username, password }) => {
  return instance.post('oauth2/Token', jsonObjToUrlEncoded({
    username, 
    password, 
    grant_type: 'password'
  }));
};

export const refreshAuthentication = ({ refreshToken }) => {
  return instance.post('oauth2/Token', jsonObjToUrlEncoded({
    refresh_token: refreshToken, 
    grant_type: 'refresh_token',
  }));
};