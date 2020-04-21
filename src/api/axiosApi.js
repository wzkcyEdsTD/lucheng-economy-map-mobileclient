import { getDefaultAxios } from "./index.js";
/**
 * @param {*} params
 * @param {*} axios
 */
export async function axiosApi({ url, params = {} }) {
  const axios = getDefaultAxios();
  const { data } = await axios.get(url, { params });
  return data;
}
