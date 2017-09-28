export async function sampleDataGateway() {
  const sampleData = await getSampleDataAsync()

  return { sampleData }
}

const getSampleDataAsync = () =>
  Promise.resolve({
    sampleData: [
      { id: '1', text: 'this is some' },
      { id: '2', text: 'random data' },
      { id: '3', text: 'so we can see' },
      { id: '4', text: 'that everything is working' }
    ]
  })
