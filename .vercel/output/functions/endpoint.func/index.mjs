import { default as pin } from './pin.mjs'
import { default as gist } from './gist.mjs'

export default async (req, res) => {
  const url = new URL(req.url, 'https://localhost')
  req.query = Object.fromEntries(url.searchParams.entries())
  switch(url.pathname) {
    case '/symlink':
      pin(req, res)
      break
    case '/endpoint':
      gist(req, res)
      break
    default:
      res.statusCode = 404
      res.end('Not Found')
      break
  }
}
