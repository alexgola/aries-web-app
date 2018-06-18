module.exports.init = function(axios) {
  const get = ({includes}) => {
    return axios.get('checklist', {
      params: {
        includes,
      }
    })
  }
  const getById = ({includes, id}) => {
    return axios.get(`checklist/${id}`, {
      params: {
        includes,
      }
    })
  }

  return {
    get,
    getById,
  }
}