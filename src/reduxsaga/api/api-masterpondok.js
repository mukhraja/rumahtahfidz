import axios from "axios";
import config from "../config/config";

// GET
const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/masterpondok`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createmasterpondok = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/masterpondok`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getmasterpondokid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(
      `${config.domain}/masterpondok/${payload.id}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYRUMAHTAHFIDZ
const getbymasterpondok = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/masterpondok/byrumahtahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatemasterpondok = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.formdata);
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(
      `${config.domain}/masterpondok/${id}`,
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// UPDATERUMAHNOFILE
const updatemasterpondokNoFile = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.put(
      `${config.domain}/masterpondok/data/${payload.id}`,
      payload
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletemasterpondok = async (payload) => {
  try {
    const result = await axios.delete(
      `${config.domain}/masterpondok/${payload}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list,
  createmasterpondok,
  deletemasterpondok,
  getmasterpondokid,
  updatemasterpondok,
  updatemasterpondokNoFile,
  getbymasterpondok,
};
