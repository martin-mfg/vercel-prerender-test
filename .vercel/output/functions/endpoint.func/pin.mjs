import { myfunc } from './file3.mjs'

export default async (req, res) => {
    res.end(myfunc() + " | " + Object.keys(req))
}
