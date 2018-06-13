module.exports.init = function(axios) {
  const get = () => {
    return axios.post('checklists');
  };

  return {
    get,
  }
}