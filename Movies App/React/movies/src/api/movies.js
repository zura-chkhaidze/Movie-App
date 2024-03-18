import axios from "axios";

const API_REQUEST_LIMIT = 5;
const TIME_FRAME = 60000;

let requestCount = 0;
let lastRequestTime = null;

const getMovies = async () => {
  const currentTime = Date.now();

  if (lastRequestTime && currentTime - lastRequestTime < TIME_FRAME) {
    if (requestCount >= API_REQUEST_LIMIT) {
      const timeUntilReset = TIME_FRAME - (currentTime - lastRequestTime);
      throw new Error(
        `API request limit reached. Please try again in ${
          timeUntilReset / 1000
        } seconds.`
      );
    }
  } else {
    requestCount = 0;
  }

  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/series/",
    headers: {
      "X-RapidAPI-Key": "c4a711107fmsh33b56a5fb58d714p1e1414jsn90fa35b596e5",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    requestCount++;
    lastRequestTime = currentTime;
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getMovies };
