import axios from 'axios';
import React from 'react';
function ScriptInkAPI(formData){
    const result = axios.post('https://powerful-ambition-production.up.railway.app/kickoff', formData)
    return result
}
export default ScriptInkAPI;