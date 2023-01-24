import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const getArticlesDetails = id => {
    return axios.get(`/v3/articles/${id}`);
};
