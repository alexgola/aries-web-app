module.exports.init = function(axios) {
  const get = ({includes}) => {
    return axios.get('checklist', {
      params: {
        includes,
      }
    })
  }
  const getById = ({includes, id}) => {
    return axios.get(`checklist`, {
      params: {
        includes,
        id
      }
    })
  }

  return {
    get,
    getById,
  }
}