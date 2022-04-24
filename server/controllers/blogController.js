import { client } from "../elastic.js";

const getBlogs = async (req, res) => {
  const paramsId = req.params?.id;
  let document;
  if (paramsId) {
    document = await client.search({
      index: "post",
      query: {
        match: {
          _id: paramsId,
        },
      },
    });
  } else {
    document = await client.search({
      index: "post",
      query: {
        match_all: {},
      },
    });
  }
  if (document?.hits.hits.length === 0) {
    console.log("no doc");
    res.status(400).json({ message: "Document not found" });
  } else {
    console.log("yes doc");
    res.status(200).json({ documents: document.hits.hits });
  }
  return;
};

export { getBlogs };
