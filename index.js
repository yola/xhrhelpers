module.exports = {
  status: function(response) {
    return response.xhr.status;
  },

  responseObject: function(response) {
    try {
      JSON.parse(response.xhr.responseText);
    } catch(err) {
      return {invalid_JSON: response.xhr.responseText};
    }
    return JSON.parse(response.xhr.responseText);
  },

  responseText: function(response) {
    return response.xhr.responseText;
  },

  twoHundredsOrThrow: function(response) {
    if (response.xhr.status > 299) {
      throw response;
    }

    return response;
  }
};
