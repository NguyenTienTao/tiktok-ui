import axios from "axios";

const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = async (path, option) => {
    const res = await request.get(path, option);

    return res.data.slice(0, 5);
};

export default request;
