import apiClient from '../plugins/Axios';

const apisw = function () {
  return apiClient.get('/api/films/');
}
const apiMockup = function (data) {
  return apiClient.post('/api/mockup/', data);
}
const apiPeople = function (data) {
  return apiClient.get(`/api/${data}`);
}
const apiSearch = function (data) {
  return apiClient.get(`/api/people/?search=${data}`);
}
const apiStarships = function () {
  return apiClient.get('/api/starships/');
}
const apiVehicles = function () {
  return apiClient.get('/api/vehicles/');
}
export default {
  apisw,
  apiMockup,
  apiPeople,
  apiSearch,
  apiStarships,
  apiVehicles
}
