import axios from "axios"

export const handleGetCourseDetailById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/course/get-dto-by-id?id=${id}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}