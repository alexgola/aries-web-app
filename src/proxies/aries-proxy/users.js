module.exports.init = function(axios) {
  const getMe = () => {
    return axios.post('users/me');
  };

  return {
    getMe,
  }
}