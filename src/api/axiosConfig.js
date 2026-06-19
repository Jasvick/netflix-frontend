import axios from 'axios';

export default axios.create({
    baseURL:'http://184.73.128.16:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
