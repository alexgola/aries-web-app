import axios from 'axios'
import {authenticate, refreshAuthentication} from './authenticator'
import { apiObjToJsonObj } from '../../utils/obj-mapper';

const instance = axios.create({
  baseURL: process.env.REACT_APP_FLEX_GATEWAY_HOST,
  headers: {'Content-Type': 'application/json'}
})

instance.interceptors.request.use(function (req) {
  req.headers.Authorization = `Bearer ${token}`
  return req;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (resp) {
  return apiObjToJsonObj(resp.data);
}, function (error) {
  return Promise.reject(error);
});

export default {
  authenticate: authenticate,
}