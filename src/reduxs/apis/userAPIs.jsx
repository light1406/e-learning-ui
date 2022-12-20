import axios from "axios";

export const handleRegister = (account) => {
    return axios.post("http://localhost:8080/tmdt/user/register", account)
                .then(response => response.data)
                .catch(error => Promise.reject(error));
};

export const handleLoginAccount = (username, password) => {
    return axios.get(`http://localhost:8080/tmdt/user/login-customer?username=${username}&password=${password}`)
                .then(response => response.data)
                .catch(error => Promise.reject(error));
}

export const handleGetUserById = (id) => {
    return axios.get(`http://localhost:8080/tmdt/user/get-user-by-id?id=${id}`)
                .then(response => response.data)
                .catch(error => Promise.reject(error));
}