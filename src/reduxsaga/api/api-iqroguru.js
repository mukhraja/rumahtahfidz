import axios from "axios";
import config from "../config/config";

// GET
const list = async (payload) => {
  try {
    const result = await axios.get(
      `${config.domain}/iqroguru/list/${payload.id}`
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
    const result = await axios.get(`${config.domain}/iqroguru/listawal`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createiqro = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/iqroguru`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getiqroid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/iqroguru/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GET IQRO BY RUMAH TAHFIDZ
const getiqrorumahtahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/iqroguru/byrumahtahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GET IQRO BY RUMAH TAHFIDZ
const getiqromastertahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/iqroguru/bymastertahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateiqro = async (payload) => {
  console.log("SAMPAI DISINI");
  const id = payload.id;
  console.log(payload);
  try {
    const result = await axios.put(`${config.domain}/iqroguru/${id}`, payload);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteiqro = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/iqroguru/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  listawal,
  createiqro,
  getiqroid,
  updateiqro,
  deleteiqro,
  getiqrorumahtahfidz,
  getiqromastertahfidz,
};
