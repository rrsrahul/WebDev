import axios from 'axios';
import url from '../Endpoints';

const instance = axios.create({
    baseURL:url
})

export default instance;
