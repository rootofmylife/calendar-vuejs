import axios from "axios";

export default {
  async authenticate(payload) {
    return await axios.post(process.env.VUE_APP_API + "prepare/", payload);
  },
};
