
const config = {
  // auth0 setup
  auth0: {
    domain: 'lhjd.auth0.com',
    clientId: 'ViDiIWN4n4TKsll1RFGk8tDOXxJtnIi0',
    callbackPath: '/callback'
  },
  algolia: {
    appId: 'latency',
    apiKey: '56f24e4276091e774e8157fe4b8b11f6',
    index: 'movies'
  },
  // api endpoints
  api: {
    hello: '/.netlify/functions/hello',
    getMovies: '/.netlify/functions/protected-get-movies',
    getShowtimes: '/.netlify/functions/get-movie-showtimes'
  }
}

export default config
