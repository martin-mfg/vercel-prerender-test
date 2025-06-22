import { default as handler } from './pin.mjs'

export default async (req, res) => {
  console.log('Request received:', req.url)
  handler(req, res)
}
