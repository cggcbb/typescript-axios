import { isPlainObject } from './util'

export const transformRequest = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export const transformResponse = (data: any): any => {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      // console.log(`not a json type, try transformResponseData to json error`)
    }
  }
  return data
}
