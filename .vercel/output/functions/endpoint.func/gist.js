import { myfunc } from './file3.js'

export default async (req, res) => {
    res.end(myfunc() + " | " + "gist" + " | " + Object.keys(req) + " | " + JSON.stringify(req.query))
}
