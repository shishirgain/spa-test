import axios from 'axios'

let baseURL = (tenent: string) => `http://${tenent? tenent + '.' : ''}host.apimultitenant.php8.gainhq.com/api`

let tenent = window.location.hostname.split('.').filter(item => item !== 'localhost')[0] || ''

const instance = axios.create({
    baseURL: baseURL(tenent),
    // timeout: 1000,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.token}` 
    }
  });

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.status === 401){
      console.log('token invalid')
      localStorage.removeItem('token')
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default instance