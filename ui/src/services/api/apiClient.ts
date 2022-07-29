import axios, { AxiosRequestConfig, Method } from "axios";

const API_URL = "http://localhost:5044";

export function apiGet<T>(uri: string): Promise<T> {
  return api<T>(uri, "get", undefined);
}

export function apiDelete<T>(uri: string): Promise<T> {
  return api<T>(uri, "delete");
}

export function apiPost<T>(
  uri: string,
  data: any,
  onUploadProgress?: (progressEvent: any) => void
): Promise<T> {
  return api<T>(uri, "post", data, onUploadProgress);
}

export function apiPut<T>(uri: string, data: any): Promise<T> {
  return api<T>(uri, "put", data);
}

export function apiPatch<T>(uri: string, data: any): Promise<T> {
  return api<T>(uri, "patch", data);
}

async function api<T>(
  uri: string,
  method: Method = "GET",
  data: any = null,
  onUploadProgress?: (progressEvent: any) => void
): Promise<T> {
  return call(uri, method, data, onUploadProgress);
}

function call<T>(
  uri: string,
  method: Method = "GET",
  data: any = null,
  onUploadProgress?: (progressEvent: any) => void
): Promise<T> {
  let request: AxiosRequestConfig = {
    url: `${API_URL}/${uri}`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    onUploadProgress,
  };

  if (data !== null) {
    request = {
      ...request,
      data,
    };
  }

  return axios(request)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
}

const apiClient = {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  patch: apiPatch,
  delete: apiDelete,
};

export default apiClient;
