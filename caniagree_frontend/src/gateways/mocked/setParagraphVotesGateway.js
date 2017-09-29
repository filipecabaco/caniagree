export async function setParagraphUpvote({ id }) {
  const response = await setParagraphUpvoteAsync({
    id
  })

  console.log('UPVOTING!!', id)

  return response
}

const setParagraphUpvoteAsync = ({ id }) => {
  return Promise.resolve({
    id
  })
}

export async function setParagraphDownvote({ id }) {
  const response = await setParagraphDownvoteAsync({
    id
  })

  console.log('DOWNVOTING!!', id)

  return response
}

const setParagraphDownvoteAsync = ({ id }) => {
  return Promise.resolve({
    id
  })
}
