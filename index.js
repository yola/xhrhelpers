module.exports = {
  status: function(response) {
    return response.xhr.status;
  },

  response: function(response) {
    return JSON.parse(response.xhr.response);
  },

  responseText: function(response) {
    return response.xhr.responseText;
  },

  twoHundredsOrThrow: function(response) {
    if (response.xhr.status > 299) {
      throw new Error('Status code > 299');
    }

    return response;
  }
};
