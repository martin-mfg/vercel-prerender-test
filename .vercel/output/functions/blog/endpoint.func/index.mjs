import { default as handler } from './pin.mjs'

export default async (req, res) => {
  console.log('Request received:', req.url, " original route:" + req.headers['x-now-route-matches'])
  handler(req, res)
}
