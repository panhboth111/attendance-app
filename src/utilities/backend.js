import axios from "axios";
import cookie from "./cookie";
const baseURL = "http://13.59.245.222:3000";
//auth
export const signin = async (signinUser) => {
  console.log(signinUser);
  const response = await axios.post(`${baseURL}/auth/login`, signinUser);
  console.log(response);
  if (response.status == 200) {
    cookie.setCookie("auth-token", response.data.token, 30); //window.localStorage.setItem("auth-token",token)
    localStorage.setItem("LastLogged", Date.now());
    window.location.replace("/");
  }
  return;
};
export const getUser = async () => {
  const data = await makeGetRequest("/employees/employee");
  return data;
};
export const signout = () => {
  cookie.setCookie("auth-token", "", 30);
  localStorage.setItem("LastLogged", Date.now());
  window.location.reload();
};

//admin
export const getDepartments = async () => {
  const data = await makeGetRequest("/admin/departments");
  return data.data;
};
export const getEmployees = async () => {
  const data = await makeGetRequest("/admin/employees");
  return data.data;
};
export const getWorkChecks = async () => {
  const data = await makeGetRequest("/admin/workchecks");
  return data.data;
};
//employees
export const checkIn = async () => {
  const data = await makeGetRequest("/employees/checkIn");
  return data;
};
export const checkOut = async () => {
  const data = await makeGetRequest("/employees/checkOut");
  return data;
};

export const createUser = async (newUser) => {
  const data = await makePostRequest("/admin/user/add", newUser);
  console.log(data);
  return data;
};
//use these when u need to use Authorization Bearer (access private routes)
export const makeGetRequest = async (route) => {
  const token = cookie.getCookie("auth-token");
  //concat the route and the baseURL together for example, our baseURL is http://localhost:3000 and route is /user => we get http://localhost:3000/user
  const url = baseURL + route;
  const response = await axios.get(url, {
    headers: { "auth-token": token },
  });
  return response.data;
};
export const makePostRequest = async (route, data) => {
  const token = cookie.getCookie("auth-token");
  const url = baseURL + route;
  const response = await axios.post(url, data, {
    headers: { "auth-token": token },
  });
  return response.data;
};
