import { IPageData, IQueryUserRoleParm, IResponseData, IUserRoleItem, ListItem } from '@/api/type'

export interface ListItem<T = any> {
  id: string
  modelId: string
  projectType: string | number
  ntfNum: string
  name: string
  description: string
}

// 创建
export declare namespace NftCreateType {
  type ModelParams = {
    relatedId?: string
    modelId?: string
    projectType: string | number
    ntfNum: string
    name: string
    description: string
  }
  type PropertyParams = {
    relatedId?: array
    assetSceneType?: string
    cityIds?: string
    projectType: string | number
    routeIds?: string
    mediaLocationIds?: string
    name: string
  }
  type RequestParams = PropertyParams & ModelParams
  interface ResponseData extends IResponseData<IPageData<T>> {
    d?: number
  }
}
// 编辑
export declare namespace NftEditType {
  type ModelParams = {
    id: string
    relatedId?: string
    modelId?: string
    projectType: string | number
    ntfNum: string
    name: string
    description: string
  }
  type PropertyParams = {
    id: string
    relatedId?: array
    assetSceneType?: string
    cityIds?: string
    projectType: string | number
    routeIds?: string
    mediaLocationIds?: string
    name: string
  }
  type RequestParams = PropertyParams & ModelParams
  interface ResponseData extends IResponseData<IPageData<T>> {
    d?: number
  }
}
// 搜索
export declare namespace NftListType {
  interface RequestParams {
    pageSize: string
    currentPage: string
    id: string
    modelId: string
    projectType: string | number
    stock?: string
    name?: string
    description?: string
  }
  interface ResponseData extends IResponseData<IPageData<T>> {
    d?: number
  }
}
// 详情
export declare namespace NftDetailType {
  interface RequestParams {
    id: string
  }
  interface ResponseData extends IResponseData<IPageData<T>> {
    d?: number
  }
}
// 搜索
export interface NftSearchType {
  createTime: string
}
export interface IModelTypeItem {
  value: string
  desc: string
}

export interface ListItem<T = any> {
  id?: string
  relatedId: string
  type: string
  count?: string
  name?: string
  remark?: string
  image?: string
}
