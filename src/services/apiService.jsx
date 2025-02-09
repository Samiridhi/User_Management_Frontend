import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = {
  // Fetch user by email
  getUserByEmail: (email) => {
    return axios.get(`${BASE_URL}/email`, { params: { email } })
      .then(response => response.data);
  },

  // Fetch user by ID
  getUserById: (id) => {
    return axios.get(`${BASE_URL}/${id}`)
      .then(response => response.data);
  },

  // Search users by keyword
  searchUsers: (keyword) => {
    return axios.get(BASE_URL, { params: { keyword } })
      .then(response => response.data);
  },

  // Load users from external API
  loadUsers: () => {
    return axios.post(`${BASE_URL}/load`)
      .then(response => response.data);
  }
};

export default apiService;
