import axios from "axios";

const options = {
  method: "GET",
  url: "https://recetas-en-espanol.p.rapidapi.com/api/recipes",
  headers: {
    "X-RapidAPI-Key": "e869379930msh3b3b89e6dffa448p1405adjsn0a0d2cb3c967",
    "X-RapidAPI-Host": "recetas-en-espanol.p.rapidapi.com",
  },
};

const getTheFood = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getTheFood;
