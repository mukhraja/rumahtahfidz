import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/santri`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
};
