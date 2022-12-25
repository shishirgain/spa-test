import axios from 'axios'
import router from "@/router"

let baseURL = (tenent: string) => `http://${tenent ? tenent + '.' : ''}host.apimultitenant.php8.gainhq.com/api`

let tenent = window.location.hostname.split('.').filter(item => item !== 'localhost')[0] || ''

const instance = axios.create({
  baseURL: baseURL(tenent),
  // timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  config.headers = { ...config.headers, 'Authorization': `Bearer ${localStorage.token}` }
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
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  if (error.response.status === 401) {
    localStorage.removeItem('token')
    router.push('/auth/signin')
  }

  return Promise.reject(error);
});


export default instance