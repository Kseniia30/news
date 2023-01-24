import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const getArticlesCount = () => {
    return axios.get('/v3/articles/count');
};
