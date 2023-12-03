import axios from 'axios';

const maritalkResponse = async (messages) => {
  const backendUrl = "http://localhost:3001/api/maritalk"; 

  const requestData = {
    "messages": messages,
    "do_sample": true,
    'max_tokens': 3000,
    "temperature": 0.7,
    "top_p": 0.95,
  };

  try {
    const response = await axios.post(backendUrl, requestData);
    if (response.status === 429) {
      console.log("Rate limited, tente novamente em breve");
    } else if (response.status === 200) {
      const data = response.data;
      console.log(data.answer);
      return data;
    } else {
      console.error(`Erro na solicitação: ${response.statusText}`);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error("Erro na solicitação:", error.message);
    throw error;
  }
};

export default maritalkResponse;
