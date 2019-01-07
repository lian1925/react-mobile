import { log } from "./log";
import { BASE_URL, RESPONSE_OK } from "./constant";
import axios from "axios";
import { setStore, getStore, removeStore } from "./store";
const Ajax = ({ method, url, data }) =>
  new Promise(async (resolve, reject) => {
    url = BASE_URL + url;
    log(url);
    const token = getStore("token");
    const headers = {
      Authorization: token
    };
    axios({
      method,
      url,
      data,
      timeout: 7000,
      headers
    })
      .then(res => {
        if (
          res.status === 200 &&
          res.data &&
          res.data.returnCode === RESPONSE_OK
        ) {
          resolve(res);
        } else if (
          res.status === 200 &&
          res.data &&
          res.data.returnCode !== RESPONSE_OK
        ) {
          const err = {
            errCode: res.data.returnCode,
            errMsg: res.data.returnMsg
          };
          reject(err);
        } else {
          const err = {
            errCode: -1,
            errMsg: "请求失败"
          };
          reject(err);
        }
      })
      .catch(error => {
        const err = {
          errCode: -1,
          errMsg: "请求失败"
        };
        reject(err);
      });
  });
const get = (url, data = {}) => {
  const array = Object.keys(data);
  url =
    array.length === 0
      ? url
      : url +
        "?" +
        array
          .map(
            item =>
              encodeURIComponent(item) + "=" + encodeURIComponent(data[item])
          )
          .join("&");
  return Ajax({
    url,
    method: "get"
  });
};

const post = (url, data = {}) =>
  Ajax({
    url,
    data,
    method: "post"
  });

const put = (url, data = {}) =>
  Ajax({
    url,
    data,
    method: "put"
  });

export { get, post, put };
