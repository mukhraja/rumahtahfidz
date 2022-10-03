import axios from "axios";
import config from "../config/config";

// GET
const list = async (payload) => {
  try {
    const result = await axios.get(
      `${config.domain}/alquran/list/${payload.id}`
    );
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETLISTAWAL
const listawal = async () => {
  try {
    const result = await axios.get(`${config.domain}/alquran/listawal`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createalquran = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/alquran`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getalquranid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/alquran/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatealquran = async (payload) => {
  console.log("SAMPAI DISINI");
  const id = payload.id;
  console.log(payload.id);
  try {
    const result = await axios.put(`${config.domain}/alquran/${id}`, payload);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletealquran = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/alquran/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  listawal,
  createalquran,
  getalquranid,
  updatealquran,
  deletealquran,
};
