import axios from "axios";

export const enrichName = async (name) => {
  const res = await axios.get(`https://api.nationalize.io?name=${name}`);
  return res.data;
};
