import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json([
            {
                slug: "what-is-nextjs",
                title: "What is Next.js?"
            },
            {
                slug: "static-site-generation",
                title: "Static Site Generation"
            },
            {
                slug: "server-side-rendering",
                title: "Server-Side Rendering"
            },
            {
                slug: "client-side-rendering",
                title: "Client-Side Rendering"
            }
        ]);
    } else {
        res.status(500).json({ name: "Method Not Allowed" });
    }}

