import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = {
  // Fetch user by email
  getUserByEmail: async (email) => {
    const response = await axios.get(`${BASE_URL}/email`, { params: { email } });
    return response.data;
  },

  // Fetch user by ID
  getUserById: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },

  // Search users by keyword
  searchUsers: async (keyword) => {
    const response = await axios.get(BASE_URL, { params: { keyword } });
    return response.data;
  },

  // Load users from external API
  loadUsers: async () => {
    const response = await axios.post(`${BASE_URL}/load`);
    return response.data;
  }
};

export default apiService;
