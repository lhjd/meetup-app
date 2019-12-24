
const config = {
  // auth0 setup
  auth0: {
    domain: 'lhjd.au.auth0.com',
    clientId: '5e017c66e44a5d07910a30b0',
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
