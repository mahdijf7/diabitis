import axios from "axios";
const BaseUrlV1 = "http://162.55.95.245:7050/api/v1";
const Auth = "/auth";
const Web = "/web";

class Services {
  async info(token, lang) {
    return await axios.get(`${BaseUrlV1}${Web}/info`, {
      headers: {
        "accept-language": lang,
      },
    });
  }
  async getCaptcha(token, lang) {
    return await axios.get(`${BaseUrlV1}${Auth}/captcha?width=190&height=90`, {
      headers: {
        "accept-language": lang,
      },
    });
  }
  async getNews(token, lang, request, query) {
    return await axios.get(`${BaseUrlV1}${Web}/news${query}`, {
      headers: {
        "accept-language": lang,
      },
    });
  }
  async sendCode(token, lang, request) {
    return await axios.post(`${BaseUrlV1}${Auth}/send-code`, request, {
      headers: {
        "accept-language": lang,
      },
    });
  }
  async login(token, lang, request) {
    return await axios.post(`${BaseUrlV1}${Auth}/login`, request, {
      headers: {
        "accept-language": lang,
      },
    });
  }
  async register(token, lang, request) {
    return await axios.post(`${BaseUrlV1}${Auth}/register`, request, {
      headers: {
        "accept-language": lang,
      },
    });
  }
}
export default new Services();
