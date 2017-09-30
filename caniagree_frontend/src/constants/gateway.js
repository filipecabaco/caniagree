export const baseUrl = 'https://caniagree-api.herokuapp.com/'

export const getServicesPath = 'services'
export const getServicePath = (id) => `services/${id}`
export const getParagraphsPath = (id) => `services/${id}/paragraphs`

export const paragraphUpVotePath = (id) => `paragraphs/${id}/up`
export const paragraphDownVotePath = (id) => `paragraphs/${id}/down`
