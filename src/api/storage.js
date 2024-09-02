const setToken = (token) => {
  localStorage.setItem("token", token);
};
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
const deleteToken = () => {
  localStorage.removeItem("token");
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export { setToken, getToken, deleteToken, checkToken };
