import axios from "axios";
import config from "../config/config";

// GETALL
const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/role`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getroleid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/role/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createrole = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/role`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updaterole = async (payload) => {
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(`${config.domain}/role/data/${id}`, payload);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleterole = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/role/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createrole,
  deleterole,
  getroleid,
  updaterole,
};
