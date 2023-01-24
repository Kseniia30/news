import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const getByQuery = query => {
    return axios.get(`/v3/articles?_limit=9&title_contains=${query}`);
};
