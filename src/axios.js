import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://AssetlookApi-env-1.eba-tbqzyzm4.ap-south-1.elasticbeanstalk.com/assetlook/api/v1/supplier',
    headers: {
        'API_Client_Id': 'bft',
        'API_Client_Secret': 'va41p1579156951370',
        'Content-Type': 'application/json'
      }
});

// instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

// instance.interceptors.request.use(request => {
//     console.log(request);
//     return request;
// });

// instance.interceptors.response.use(response => {
//     console.log(response);
//     return response;
// });

export default instance;
