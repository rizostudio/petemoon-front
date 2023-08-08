import { userDataStorage, isLogin } from "@/localSttorage/auth";
export const initState = {
  isLoggedIn: false,
  userData: {},
};

export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "INIT_STATE":
      console.log(action.payload);
      newState = action.payload;
      break;
    case "CHANGE_LOGIN_STATUS":
      newState = { ...state, isLoggedIn: action.payload };
      break;
    case "CHANGE_USER_DATA":
      newState = { ...state, userData: action.payload };
      break;
  }
  userDataStorage.set(JSON.stringify(newState.userData));
  isLogin.set(newState.isLoggedIn);
  return newState;
};
