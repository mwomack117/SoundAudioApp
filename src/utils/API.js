import axios from "axios";

export default {
  getSounds: function(searchTerm) {
    return axios.get(
      `https://freesound.org/apiv2/search/text/?query=${searchTerm}&fields=name,previews&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`
    );
  }
};
