import axios from "axios";

const API_KEY = "1576bcc0dd5e9cc7b350349296e59fbb";
const API_URL = "https://api.edamam.com/api/recipes/v2";
const API_ID = "5a744d30";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/types`, {
      params: {
        app_id: API_ID,
        app_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
