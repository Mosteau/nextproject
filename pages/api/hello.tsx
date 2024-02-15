import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ id: req.query.id, name: "John Doe" });
  } else {
    res.status(500).json({ name: "Method Not Allowed" });
  }
}