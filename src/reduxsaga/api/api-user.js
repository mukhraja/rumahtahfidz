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

// GETALL
const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/user`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYADMIN
const listadmin = async () => {
  try {
    const result = await axios.get(`${config.domain}/user/byadmin`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETID
const getuserid = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.get(`${config.domain}/user/${payload.id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYRUMAHTAHFIDZ
const getuserrumahtahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/user/byrumahtahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// GETBYRUMAHTAHFIDZ
const getusermastertahfidz = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.get(
      `${config.domain}/user/bymastertahfidz/${payload}`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// CREATE
const createuser = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/user`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createNoFileuser = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/user/data`, payload);
    console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateuser = async (payload) => {
  const id = payload.get("id");
  console.log(id);
  try {
    const result = await axios.put(`${config.domain}/user/data/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

// UPDATEuserNOFILE
const updateuserNoFile = async (payload) => {
  console.log("SAMPAI DISINI");
  console.log(payload.id);
  try {
    const result = await axios.put(
      `${config.domain}/user/${payload.id}`,
      payload
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteuser = async (payload) => {
  try {
    const result = await axios.delete(`${config.domain}/user/${payload}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  list,
  createuser,
  createNoFileuser,
  updateuser,
  updateuserNoFile,
  getuserid,
  deleteuser,
  signin,
  signup,
  getuserrumahtahfidz,
  getusermastertahfidz,
  listadmin,
};
