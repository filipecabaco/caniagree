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
      up_vote: 0,
      down_vote: 0
    }, {
      id: '2',
      body: 'something really strange',
      up_vote: 0,
      down_vote: 5
    }, {
      id: '3',
      body: 'this part is really cool man',
      up_vote: 10,
      down_vote: 0
    }]
  },
  '2': {
    name: 'random data',
    paragraphs: [{
      id: '1',
      body: 'random === 4',
      up_vote: 0,
      down_vote: 0
    }, {
      id: '2',
      body: 'Math.random() === 10 * Math.random()',
      up_vote: 0,
      down_vote: 5
    }, {
      id: '3',
      body: 'Math.random() !== Math.random() (some times)',
      up_vote: 10,
      down_vote: 0
    }]
  },
  '3': {
    name: 'so we can see',
    paragraphs: [{
      id: '1',
      body: 'saw',
      up_vote: 0,
      down_vote: 0
    }, {
      id: '2',
      body: 'blind',
      up_vote: 0,
      down_vote: 5
    }, {
      id: '3',
      body: 'seen',
      up_vote: 10,
      down_vote: 0
    }]
  },
  '4': {
    name: 'that everything is working',
    paragraphs: [{
      id: '1',
      body: 'did\'t do nothing yet',
      up_vote: 0,
      down_vote: 0
    }, {
      id: '2',
      body: 'red alert in every test',
      up_vote: 0,
      down_vote: 5
    }, {
      id: '3',
      body: 'we are doing TDD, everything is ok and safe :)',
      up_vote: 10,
      down_vote: 0
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
