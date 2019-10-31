const request = require('supertest')
const server = require('../src/app.js')

beforeAll(async () => {
  // do something before anything else runs
  console.log('Jest starting!')
})

// close the server after each test
afterAll(() => {
  server.close()
  console.log('server closed!')
})

describe('route tests', () => {
  test('GET /api/status', async () => {
    const response = await request(server).get('/api/status')
    expect(response.status).toEqual(200)
    expect(response.body.ok).toEqual(true)
  })
  // include any other static route tests here
})
