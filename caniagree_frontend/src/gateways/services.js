/* globals fetch */

import {
  baseUrl,
  getServicesPath,
  getParagraphsPath,
  paragraphUpVotePath,
  paragraphDownVotePath
} from '../constants/gateway'

export const getServices = async function () {
  const {data} = await (await fetch(baseUrl + getServicesPath)).json()

  return { services: data }
}

export const getParagraphs = async function (serviceId) {
  const { paragraphs = [], name = '' } = await (
    await fetch(baseUrl + getParagraphsPath(serviceId))
  ).json()

  return { paragraphs, name }
}

export const paragraphUpVote = async function (paragraphId) {
  await fetch(baseUrl + paragraphUpVotePath(paragraphId), {
    method: 'post'
  })
}

export const paragraphDownVote = async function (paragraphId) {
  await fetch(baseUrl + paragraphDownVotePath(paragraphId), {
    method: 'post'
  })
}
