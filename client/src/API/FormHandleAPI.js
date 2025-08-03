import axios from 'axios';
import APP_URL from './config';

function FormHandleAPI(token, formData) {
  return axios.post(
    `${APP_URL}/api/v1/form-check`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
}

export default FormHandleAPI;