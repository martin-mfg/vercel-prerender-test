import { parse } from 'querystring'
import { default as handler } from './pin.mjs'

export default async (req, res) => {
  console.log('Request received:', req.url, "query:", req.query, " original route:", req.headers['x-now-route-matches'])
  const matches = parse(req.url)
  console.log('Parsed query:', matches)
  handler(req, res)
}
