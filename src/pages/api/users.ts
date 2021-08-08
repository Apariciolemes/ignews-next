import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, resp: NextApiResponse) => {
    const users = [
        { id: 1, name: "Diego" },
        { id: 2, name: "Dani" },
        { id: 3, name: "Rafa" },
    ]

    return resp.json(users)
}