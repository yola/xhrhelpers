module.exports = {
  status: function(response) {
    return response.xhr.status;
  },

  response: function(response) {
    return JSON.parse(response.xhr.response);
  },

  responseText: function(response) {
    return response.xhr.responseText;
  }
};
