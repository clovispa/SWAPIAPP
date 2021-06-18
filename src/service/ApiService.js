import apiClient from '../plugins/Axios';

const apisw = function () {
  return apiClient.get('/api/planets/');
}
const apiMockup = function (data) {
  return apiClient.post('/api/mockup/', data);
}

export default {
  apisw,
  apiMockup
}
