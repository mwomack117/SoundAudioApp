import axios from "axios";

export default {
  getSounds: function(searchTerm) {
    return axios.get(
      `https://freesound.org/apiv2/search/text/?query=${searchTerm}&fields=name,id,previews,images&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`
    );
  },
  // show sound previews on login page
  // loginSounds: function() {
  //   return axios.get(
  //     `https://freesound.org/apiv2/search/text/?query=cat&fields=name,id,previews,images&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`
  //   );
  // }
  loginSounds: function(randomRating) {
    return axios.get(
      `https://freesound.org/apiv2/search/text/?filter=avg_rating:${randomRating}&fields=name,id,previews,images&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`
    );
  }
};
