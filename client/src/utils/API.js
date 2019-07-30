import axios from 'axios';
export default {
  // Gets a single user by id

  scrapeProduct: (searchWord) => {
    return axios.get(`/api/products/scrape/${searchWord}`);
    // return axios.get(`/api/products/scrapeDetail/${searchWord}`);
  },

  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password, zipcode) => {
    return axios.post('api/signup', {username: username, email: email, password: password, zipcode: zipcode});
  }
};
