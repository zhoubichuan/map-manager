import request from "@/utils/request";

export interface Data {
  name: string;
  age: number;
}
export const CreateApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const getModels = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const PropertyCreateApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const getNftTree = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const getNftScenarios = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const DetailApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const PropertyDetailApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const PropertyEditApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
export const EditApi = (data: Data) => {
  return request({
    url: "/tools/test",
    method: "post",
    data,
  });
};
