import * as ActionType from "../constants/User";

const INIT_STATE = {
  userProfile: {},
  isLogout: false,
  isLoading: true,
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

export default UserReducer;
