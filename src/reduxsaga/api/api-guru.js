import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/guru`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};
// GETID
const getguruid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/guru/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createguru = async (payload) => {
  console.log("SAMPAI di create");
  console.log(payload.get("name"));
  try {
    const result = await axios.post(`${config.domain}/guru`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateguru = async (payload) => {
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(`${config.domain}/guru/data/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

// UPDATEguruNOFILE
const updateguruNoFile = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.put(
      `${config.domain}/guru/${payload.id}`,
      payload
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteguru = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/guru/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createguru,
  updateguru,
  updateguruNoFile,
  getguruid,
  deleteguru,
};
