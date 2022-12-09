import axios from "axios";
import config from "../config/config";

// GETALL
const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/santri`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getsantriid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/santri/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYRUMAHTAHFIDZ
const getsantrirumahtahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/santri/byrumahtahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYMASTERTAHFIDZ
const getsantrimastertahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/santri/bymastertahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createsantri = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/santri`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateSantri = async (payload) => {
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(
      `${config.domain}/santri/data/${id}`,
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// UPDATESANTRINOFILE
const updateSantriNoFile = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.put(
      `${config.domain}/santri/${payload.id}`,
      payload
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletesantri = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/santri/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createsantri,
  deletesantri,
  getsantriid,
  updateSantri,
  updateSantriNoFile,
  getsantrirumahtahfidz,
  getsantrimastertahfidz,
};
