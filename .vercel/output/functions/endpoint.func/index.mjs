import { default as handler } from './pin.mjs'

export default async (req, res) => {
  console.log('Request received:', req.url, "query:", req.query, " original route:", req.headers['x-now-route-matches'])
  const query = Object.fromEntries(new URL(req.url, 'https://localhost').searchParams.entries())
  req.query = query
  handler(req, res)
}
