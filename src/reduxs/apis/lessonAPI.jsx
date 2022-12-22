import axios from "axios"

export const handleGetLessonVideoById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/lesson-video/get-by-id?id=${id}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}