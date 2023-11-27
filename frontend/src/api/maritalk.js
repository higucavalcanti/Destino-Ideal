import axios from 'axios';

export const maritalkResponse = async (messages) => {
  const url = "https://chat.maritaca.ai/api/chat/inference";

//   arrumar um jeito de esconder a key pelo .env
  const myKey = "117863238605778346429$775d1b86aa36205ebca412a210e73200c7df6f1e5491beaa6791c04ccec43055";

  const authHeader = {
    "authorization": `Key ${myKey}`
  };

  const requestData = {
    "messages": messages,
    "do_sample": true,
    'max_tokens': 3000,
    "temperature": 0.7,
    "top_p": 0.95,
  };

  // Wrap the API request in a function and return the result
  async function getMaritalkResponse(requestData, headers) {
    try {
      const response = await axios.post(url, requestData, { headers });

      if (response.status === 429) {
        console.log("Rate limited, tente novamente em breve");
      } else if (response.status === 200) {
        const data = response.data;
        console.log(data.answer);
        return data; // Return the data from the API response
      } else {
        console.error(`Erro na solicitação: ${response.statusText}`);
        throw new Error(response.statusText); // Throw an error for non-200 status codes
      }
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
      throw error; // Rethrow the error for further handling
    }
  }

  // Call the function and return the result
  return getMaritalkResponse(requestData, authHeader);
};

export default maritalkResponse;
