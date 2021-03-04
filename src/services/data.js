import axios from 'axios';

const API_KEY = "1a7732e6-cd06-4b86-bacd-195776a97c20";

export const fetchCats = async () => {
    const res = await axios.get(`https://api.thecatapi.com/v1/breeds`,
      {
      "x-api-key": API_KEY
    })
    return res.data;
}

export const fetchDogs = async () => {
    const res = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    return res.data;
}
