import axios from "axios";
import config from "../config/config";

const signup = async (data) => {
  try {
    const result = await axios.post(`${config.domain}/user/signup`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (data) => {
  try {
    const result = await axios.post(`${config.domain}/user/login`, data);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  signin,
  signup,
};
