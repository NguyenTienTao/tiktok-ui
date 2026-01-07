import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option) => {
    const res = await request.get(path, option);

    return res.data.slice(0, 5);
};

export default request;
