// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const req = "https://jsonplaceholder.typicode.com/posts";

export default function (req, res) {
  res.status(200).json({ data: "GetData" });
}
