import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from 'containers/constant';

const fetchPost = async (url, body, messErr = null, isAuthorization = true) => {
    try {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (isAuthorization)
            headers.Authorization = await AsyncStorage.getItem('token');
        let requestInit = { method: 'POST', headers };
        if (body) requestInit.body = JSON.stringify(body);
        const response = await fetch(`${API_URL}/${url}/`, requestInit);
        if (response.status === 403) throw Error('invalidToken');
        if (response.status === 200) return await response.json();
        if (messErr) throw Error(messErr);
    } catch (error) {
        throw error;
    }
};

const fetchPostFormData = async (
    url,
    formData,
    messErr = null,
    isAuthorization = true,
    method = 'POST',
) => {
    try {
        let headers = {
            'Content-Type': 'multipart/form-data',
        };
        if (isAuthorization)
            headers.Authorization = await AsyncStorage.getItem('token');
        let requestInit = { method: method, headers };
        requestInit.body = formData;
        const response = await fetch(`${API_URL}/api/${url}`, requestInit);
        const result = await response.json();
        if (response.status === 500)
            throw Error(result.message ? result.message : messErr);
        if (response.status === 200) return result;
        if (response.status === 403) throw Error('invalidToken');
        if (messErr) throw Error(messErr);
    } catch (error) {
        throw error;
    }
};

const fetchPut = async (url, body, messErr = null, isAuthorization = true) => {
    try {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (isAuthorization)
            headers.Authorization = await AsyncStorage.getItem('token');
        let requestInit = { method: 'PUT', headers };
        if (body) requestInit.body = JSON.stringify(body);
        const response = await fetch(`${API_URL}/api/${url}`, requestInit);
        if (response.status === 403) throw Error('invalidToken');
        if (response.status === 200) return await response.json();
        if (messErr) throw Error(messErr);
    } catch (error) {
        throw error;
    }
};

const fetchGet = async (
    url,
    params = null,
    messErr = null,
    isAuthorization = true,
) => {
    try {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (isAuthorization)
            headers.Authorization = await AsyncStorage.getItem('token');
        let requestInit = { method: 'GET', headers };
        let queryString = '';
        if (params) {
            queryString = `?${Object.keys(params)
                .map(key => `${key}=${params[key] || ''}`)
                .join('&')}`;
        }
        const response = await fetch(
            `${API_URL}/api/${url}${queryString}`,
            requestInit,
        );
        if (response.status === 403) throw Error('invalidToken');
        if (response.status === 200) return await response.json();
        if (messErr) throw Error(messErr);
    } catch (error) {
        throw error;
    }
};

export { fetchPost, fetchPostFormData, fetchPut, fetchGet };

