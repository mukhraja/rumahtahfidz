import storage from "redux-persist/lib/storage";
import * as ActionType from "../constants/User";

const INIT_STATE = {
  userdata: [],
  userProfile: {},
  isLogout: false,
  isLoading: false,
  isLoggedIn: false,
  token: localStorage.getItem("token"),
  message: "",
};

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.ADD_SIGNUP_SUCCEED: {
      return applyAddSignupSucceed(state, action);
    }
    case ActionType.GET_SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_SIGNIN_SUCCEED: {
      return applyGetSigninSucceed(state, action);
    }
    case ActionType.GET_SIGNOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_SIGNOUT_SUCCEED: {
      return applyGetSignoutSucceed(state, action);
    }
    case ActionType.SIGNUP_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ActionType.SHOW_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
        isLoggedIn: false,
      };
    }
    // GETALL
    case ActionType.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_USER_SUCCEED:
      return applyGetUserSucceed(state, action);
    // GETBYADMIN
    case ActionType.GET_BY_ADMIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ADMIN_USER_SUCCEED:
      return applyGetByAdminUserSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_USER_SUCCEED:
      return applyGetByIdUserSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_USER_SUCCEED:
      return applyGetByRumahTahfizUserSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_USER_SUCCEED:
      return applyGetByMasterTahfizUserSucceed(state, action);
    // CREATE
    case ActionType.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_USER_SUCCEED:
      return applyCreateUserSucceed(state, action);
    // CREATE NO FILE
    case ActionType.CREATE_USER_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_USER_NOFILE_SUCCEED:
      return applyCreateUserNofileSucceed(state, action);
    // Update
    case ActionType.UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_USER_SUCCEED:
      return applyUpdateUserSucceed(state, action);
    // UPDATE NO FILE
    case ActionType.UPDATE_USER_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_USER_NOFILE_SUCCEED:
      return applyUpdateNoFileUserSucceed(state, action);
    // DELETE
    case ActionType.DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_USER_SUCCEED:
      return applyDeleteUserSucceed(state, action);
    default:
      return state;
  }
};

const applyAddSignupSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    name: payload.name,
    email: payload.email,
    role: payload.role,
    userId: payload.userId,
    isLoading: false,
  };
};

const applyGetSigninSucceed = (state, action) => {
  const { payload } = action;
  const { profile } = payload;
  return {
    ...state,
    userProfile: { ...profile },
    isLoading: false,
    isLoggedIn: true,
    isLogout: false,
    message: "",
  };
};

const applyGetSignoutSucceed = (state, action) => {
  return {
    ...state,
    userProfile: {
      name: "",
      email: "",
      role: "",
      userId: "",
    },
    isLoading: false,
    isLoggedIn: false,
    isLogout: true,
    message: "",
  };
};

const applyCreateUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};
const applyCreateUserNofileSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyGetUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyGetByAdminUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyGetByIdUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [payload.data],
  };
};

const applyGetByRumahTahfizUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyGetByMasterTahfizUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyUpdateUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [...payload.data],
  };
};

const applyUpdateNoFileUserSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    userdata: [payload],
  };
};

const applyDeleteUserSucceed = (state, action) => {
  const { payload } = action;
  const User = state.userdata.filter((el) => el.id !== payload);
  console.log(User);
  return {
    ...state,
    userdata: [...User],
    isLoading: false,
    isRefresh: false,
  };
};

export default UserReducer;
