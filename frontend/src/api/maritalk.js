// maritalkResponse.js
import axios from 'axios';

const maritalkResponse = async (messages) => {
  try {
    const response = await axios.post('/api/maritalk', { messages });
    return response.data;
  } catch (error) {
    console.error("Error in Maritalk request:", error.message);
    throw error;
  }
};

export default maritalkResponse;
