import toast from "react-hot-toast";

const Alert = {
  success: (message, idtoast) => {
    toast.success(message, {
      position: "top-center",
      duration: 2000,
      style: {
        fontWeight: "bold",
      },
    });
  },
  error: (message) => {
    toast.error(message, {
      position: "top-center",
      duration: 2000,
      style: {
        fontWeight: "bold",
      },
    });
  },
  loading: (message) => {
    toast.loading(message, {
      position: "top-center",
      style: {
        fontWeight: "bold",
      },
    });
  },
};

export default Alert;
