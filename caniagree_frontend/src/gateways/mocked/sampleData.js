export async function sampleDataGateway () {
  const services = await getSampleDataAsync()

  return { services }
}

const getSampleDataAsync = () =>
  Promise.resolve([
    { id: '1', self: 'service/1', name: 'this is some' },
    { id: '2', self: 'service/2', name: 'random data' },
    { id: '3', self: 'service/3', name: 'so we can see' },
    { id: '4', self: 'service/4', name: 'that everything is working' }
  ])

export async function paragraphsSmpleDataGateway () {
  const services = await getParagraphsSampleDataAsync()

  return { services }
}

const getParagraphsSampleDataAsync = () =>
  Promise.resolve([
    { id: '1', self: 'service/1', name: 'this is some' },
    { id: '2', self: 'service/2', name: 'random data' },
    { id: '3', self: 'service/3', name: 'so we can see' },
    { id: '4', self: 'service/4', name: 'that everything is working' }
  ])
