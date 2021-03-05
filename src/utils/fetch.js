/* eslint-disable no-unused-vars */
import axios from 'axios';
import { getToken } from './storage';
const baseUrl = 'Base Url Here';

const BASIC_AUTH = {
  Authorization: 'Basic Auth Here',
};

const BEARER_AUTH = {
  Authorization: `Bearer ${getToken()}`,
};

const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};
