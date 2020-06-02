import superagent from 'superagent'
import Cookies from 'js-cookie'
import normalize from 'json-api-normalizer'

import { configVariables } from '../config'

const methods = ['get', 'post', 'put', 'patch', 'delete']

const formatUrl = (path) => (
  path.search(/^https?:\/\/(.*)/) === -1 ?
    { url: `${configVariables.apiUrl}/${path}`, external: false }
    :
    { url: path, external: true }
)

const successResponse = (response, resolve) => {
  // Set or Remove authorization header
  const authorizationHeader = response.headers.authorization
  if (authorizationHeader) {
    Cookies.set('authorization-header-frontend', authorizationHeader)
  } else {
    if (response.body.meta && response.body.meta.logout) {
      Cookies.remove('authorization-header-frontend')
    }
  }

  return resolve({ data: response.body.data, normalizedData: normalize(response.body), meta: response.body.meta, translations: response.body.translations })
}

const errorResponse = (response, error, reject) => {
  const errorData = { status: response.status, body: response.body || error }

  return reject(errorData)
}

export default class client {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers, files, fields } = {}) => new Promise((resolve, reject) => {
        const urlData = formatUrl(path)

        const request = superagent[method](urlData.url)

        if (params) {
          request.query(params)
        }
        if (headers) {
          request.set(headers)
        }

        if (files) {
          files.forEach(file => request.attach(file.key, file.value))
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value))
        }

        const authorizationHeaderCookie = Cookies.get('authorization-header-frontend')
        if (authorizationHeaderCookie) {
          request.set('Authorization', authorizationHeaderCookie)
        }

        if (data) {
          request.send(data)
        }
        request.end((err, res = {}) => (err ? errorResponse(res, err, reject) : successResponse(res, resolve)))
      })
    }
  )}
}
