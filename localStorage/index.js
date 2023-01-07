const initLocalStorageApi = (key) => ({
  get: () => localStorage.getItem(key),
  set: (newValue) => localStorage.setItem(key, newValue),
  remove: () => localStorage.removeItem(key),
});

const LS_PREFIX = "petemoon-";
const withPrefix = (key) => `${LS_PREFIX}${key}`;
export const OtpId = initLocalStorageApi(withPrefix("otp-id"));
export const refreshToken = initLocalStorageApi(withPrefix("refresh-token"));
