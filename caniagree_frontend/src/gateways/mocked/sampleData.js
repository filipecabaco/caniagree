const services = [
  { id: '1', self: 'service/1', name: 'this is some' },
  { id: '2', self: 'service/2', name: 'random data' },
  { id: '3', self: 'service/3', name: 'so we can see' },
  { id: '4', self: 'service/4', name: 'that everything is working' }
]

const paragraphs = {
  '1': {
    name: 'this is some',
    paragraphs: [{
      id: '1',
      body: 'first paragraph',
      upVotes: 0,
      downVotes: 0
    }, {
      id: '2',
      body: 'something really strange',
      upVotes: 0,
      downVotes: 5
    }, {
      id: '3',
      body: 'this part is really cool man',
      upVotes: 10,
      downVotes: 0
    }]
  },
  '2': {
    name: 'random data',
    paragraphs: [{
      id: '1',
      body: 'random === 4',
      upVotes: 0,
      downVotes: 0
    }, {
      id: '2',
      body: 'Math.random() === 10 * Math.random()',
      upVotes: 0,
      downVotes: 5
    }, {
      id: '3',
      body: 'Math.random() !== Math.random() (some times)',
      upVotes: 10,
      downVotes: 0
    }]
  },
  '3': {
    name: 'so we can see',
    paragraphs: [{
      id: '1',
      body: 'saw',
      upVotes: 0,
      downVotes: 0
    }, {
      id: '2',
      body: 'blind',
      upVotes: 0,
      downVotes: 5
    }, {
      id: '3',
      body: 'seen',
      upVotes: 10,
      downVotes: 0
    }]
  },
  '4': {
    name: 'that everything is working',
    paragraphs: [{
      id: '1',
      body: 'did\'t do nothing yet',
      upVotes: 0,
      downVotes: 0
    }, {
      id: '2',
      body: 'red alert in every test',
      upVotes: 0,
      downVotes: 5
    }, {
      id: '3',
      body: 'we are doing TDD, everything is ok and safe :)',
      upVotes: 10,
      downVotes: 0
    }]
  }
}

export async function sampleDataGateway () {
  const services = await getSampleDataAsync()

  return { services }
}

const getSampleDataAsync = () =>
  Promise.resolve(services)

export async function sampleParagraphsDataGateway (serviceId) {
  const {paragraphs = [], name = ''} = await getSampleParagraphsDataAsync(serviceId)

  return { paragraphs, name }
}

const getSampleParagraphsDataAsync = (serviceId) =>
  Promise.resolve(paragraphs[serviceId] || {})
