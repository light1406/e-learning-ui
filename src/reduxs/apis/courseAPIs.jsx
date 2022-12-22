import axios from "axios";

export const handleGetNewUpdate = () => {
    return axios
            .get('http://localhost:8080/tmdt/course/limit-10-new-update')
            .then(response => response.data)
            .catch(error => Promise.reject(error));
};