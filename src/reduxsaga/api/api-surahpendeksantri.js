import axios from "axios";
import config from "../config/config";

// GET
const list = async (payload) => {
  try {
    const result = await axios.get(
      `${config.domain}/surahpendek/list/${payload.id}`
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
    const result = await axios.get(`${config.domain}/surahpendek/listawal`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createsurahpendek = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/surahpendek`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getsurahpendekid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(
      `${config.domain}/surahpendek/${payload.id}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GET BY SURAH PENDEK BY RUMAH TAHFIDZ
const getsurahpendekrumahtahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/surahpendek/byrumahtahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GET BY SURAH PENDEK BY MASTER TAHFIDZ
const getsurahpendekmastertahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/surahpendek/bymastertahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatesurahpendek = async (payload) => {
  console.log("SAMPAI DISINI");
  const id = payload.id;
  console.log(payload);
  try {
    const result = await axios.put(
      `${config.domain}/surahpendek/${id}`,
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletesurahpendek = async (payload) => {
  try {
    const result = await axios.delete(
      `${config.domain}/surahpendek/${payload}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  listawal,
  createsurahpendek,
  getsurahpendekid,
  updatesurahpendek,
  deletesurahpendek,
  getsurahpendekrumahtahfidz,
  getsurahpendekmastertahfidz,
};
