import axios from "axios";
import config from "../config/config";

// GET
const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/pondok`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createrumah = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/pondok`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getrumahid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/pondok/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updaterumah = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.formdata);
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(`${config.domain}/pondok/${id}`, payload);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// UPDATERUMAHNOFILE
const updaterumahNoFile = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.put(
      `${config.domain}/pondok/data/${payload.id}`,
      payload
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleterumah = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/pondok/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createrumah,
  deleterumah,
  getrumahid,
  updaterumah,
  updaterumahNoFile,
};
