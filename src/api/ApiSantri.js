import api from "./Api";

export default class ApiSantri {
  static getData = async (url) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.get(url, config);
      return response.data.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  static postData = async (url, data) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      if (data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
        data = JSON.stringify(data);
      }
      const response = await api.post(url, data, config);
      return response.data.hasil;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
}
