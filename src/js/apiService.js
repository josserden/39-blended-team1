import axios from 'axios';

const AUTH_TOKEN = '563492ad6f917000010000017177ac82ad294f609aa250f88e62125c';

axios.defaults.baseURL = 'https://api.pexels.com/v1/search';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// const options = {
//   headers: {
//     Authorization: AUTH_TOKEN,
//   },
// };

export const searchImage = query => {
  // return fetch('https://api.pexels.com/v1/search', options);

  return axios
    .get(`?query=${query}&per_page=15&orientation=landscape&size=small`)
    .then(response => {
      return response.data.photos;
    });
};
