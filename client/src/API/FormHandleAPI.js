import React from 'react';
import axios from 'axios';
import APP_URL from './config';
function FormHandleAPI(token, formData){
    const result = axios.post(APP_URL+'/api/v1/form-check', {
        'Authorization': `Bearer ${token}`
    }, formData)
    return result;
}
export default FormHandleAPI;