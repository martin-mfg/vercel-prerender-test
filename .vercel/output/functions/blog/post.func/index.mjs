import { default as handler } from './src/pin.mjs'

export default async (req, res) => {
  handler(req, res)
}
