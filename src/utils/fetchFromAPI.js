import axios from "axios";

const options = {
  params: { hl: "en", gl: "US" },
  url: "https://youtube138.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "2d4b5b21e3mshe87921b5bc278f9p172dd1jsn823002c8940b",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(options);
  return data;
};
