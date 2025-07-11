import qs from 'qs';
import axios from 'axios'
export const key = "d9cf1aecd24ace311610b32cabceae98"
const sid = "1050136"
const commonUrl = 'https://tsapi.amap.com'
const urls = {
  createCircle: commonUrl + '/v1/track/geofence/add/circle',
  updateCircle: commonUrl + '/v1/track/geofence/update/circle',
  createPolygon: commonUrl + '/v1/track/geofence/add/polygon',
  updatePolygon: commonUrl + '/v1/track/geofence/update/polygon',
  delete: commonUrl + '/v1/track/geofence/delete',
  query: commonUrl + '/v1/track/geofence/list',
}

// 创建圆形围栏
export const createCircle = ({ name = "", desc = "", center, radius }) => {
  const params = {
    key,
    sid,
    name,
    desc,
    center,
    radius,
  }
  return axios({
    url: urls.createCircle,
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
  })
}
// 更新圆形围栏
export const updateCircle = ({ name = "", desc = "", center, radius, gfid }) => {
  const params = {
    key,
    sid,
    name,
    desc,
    center,
    radius,
    gfid
  }
  return axios({
    url: urls.updateCircle,
    method: 'POST',
    data: qs.stringify(params),
  })
}
// 创建多边形围栏
export const createPolygon = ({ name, desc, points }) => {
  const params = {
    key,
    sid,
    name,
    desc,
    points,
  }
  return axios({
    url: urls.createPolygon,
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
  })
}
// 更新多边形围栏
export const updatePolygon = ({ name, desc, points, gfid }) => {
  const params = {
    key,
    sid,
    name,
    desc,
    points,
    gfid,
  }
  return axios({
    url: urls.updatePolygon,
    method: 'POST',
    data: qs.stringify(params),
  })
}
// 启动/停止围栏
export const startOrStopFence = async () => {
  const res = await axios.patch('https://restapi.amap.com/v4/geofence/meta?key=' + KEY + '&gid=e7859ac4-4e57-4078-bb1a-d940b0158b4d', {
    "enable": "false"
  })
}
// 删除围栏
export const delFence = async ({ gfid }) => {
  const params = {
    key,
    sid,
    gfids: gfid
  }
  const { data } = await axios({
    url: urls.delete,
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    params
  })
  return data
}
// 查询围栏
export const queryFence = ({ outputshape = 1, gfids, page, pageSize }) => {
  const params = {
    key,
    sid,
    outputshape,
  }
  if (gfids) {
    params.gfids = gfids
  }
  if (page) {
    params.page = page
  }
  if (pageSize) {
    params.pageSize = pageSize
  }
  return axios({
    url: urls.query,
    method: 'GET',
    params
  })
}
