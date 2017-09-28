import * as actionTypes from '../constants/action.types'

const initialState = {
  items: [
    {
      id: 1,
      body: 'sad sakd askdj aksd jkasjd lkasj dlkas jd',
      upVotes: 12,
      downVotes: 67
    },
    {
      id: 2,
      body: 'od ur edl iju vo',
      upVotes: 1,
      downVotes: 6
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PARAGRAPHS:
      const { paragraphs } = action.payload

      return {
        ...state,
        items: paragraphs
      }
    default:
      return state
  }
}
