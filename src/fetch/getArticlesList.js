import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const getArticlesList = page => {
    return axios.get(`/v3/articles?_limit=9&_start=${page}`);
};
