import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '51031758-22da015b5c422b982caea10cf';

export const getImagesByQuery = query => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(URL, { params })
    .then(response => response.data)
    .catch(error => {
      throw new Error('Oops! Something went wrong. Please try again later.');
    });
};
