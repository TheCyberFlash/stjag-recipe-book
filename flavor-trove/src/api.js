import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.edamam.com/api/recipes/v2";

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/types`, {
            params: {
                app_id: API_ID,
                app_key: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};