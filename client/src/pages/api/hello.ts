// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	res.status(200).json({ name: "John Doe" });
}

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse,
// ) {
// 	try {
// 		const result = await fetch("./data.json");
// 		res.status(200).json({ result });
// 	} catch (err) {
// 		res.status(500).json({ error: "failed to load data" });
// 	}
// }
