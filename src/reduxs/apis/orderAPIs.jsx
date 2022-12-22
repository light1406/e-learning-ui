import axios from "axios";

export const handlePaymentBanking = (order) => {
    return axios
            .post('http://localhost:8080/tmdt/order/add-order', order)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
};

export const handleGetOrderByUserId = (userId) => {
    return axios
            .get(`http://localhost:8080/tmdt/order/get-order-by-user-id?userId=${userId}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}