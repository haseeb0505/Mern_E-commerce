import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmQwZjM3NWIwY2NhMjU0NmQyNTk3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDkyMDQ1MCwiZXhwIjoxNjYxMTc5NjUwfQ.lVLl9K8eNJBB8JCkpavY06AvqWjwinkQ57-8Df6-dgY"

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});
export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {
        token: `Bearer ${Token}`
    }
});

