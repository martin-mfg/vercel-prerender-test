import { myfunc } from './file3.js'

export default async (req, res) => {
    res.end(myfunc() + " | " + "pin" + " | " + Object.keys(req) + " | " + JSON.stringify(req.query))
}
