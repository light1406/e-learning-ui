import axios from "axios"

export const handleGetCategories = () => {
    return axios
            .get("http://localhost:8080/tmdt/category/get-all")
            .then(response => response.data)
            .catch(error => Promise.resolve(error));
}

export const handleGetCourseByCategory = (category) => {
    return axios
            .get(`http://localhost:8080/tmdt/course/filter-by-category?categoryId=${category}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}

export const handleGetAllCourse = () => {
    return axios
            .get(`http://localhost:8080/tmdt/course/get-all`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}