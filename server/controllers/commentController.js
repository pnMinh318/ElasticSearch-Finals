import { client } from "../elastic.js";

const getCommentByBlogId = async (req, res) => {
  const id = req.params.id;
  const documents = await client.search({
    index: "post_comments",
    query: {
      match: {
        blogId: id,
      },
    },
  });

  if (documents.hits.hits.length > 0) {
    const data = documents.hits.hits[0]._source;
    res.status(200).json({ documents: data });
  } else {
    res.status(404).json({ error: "COMMENTS NOT FOUND" });
  }
};

const postComment = async (req, res) => {
  const blogId = req.params.blogId;
  const { content, userId } = req.body;
  const bulkResponse = await client.bulk({
    refresh: true,
    operations: [
      { index: { _index: "post_comments" } },
      {
        userId: userId,
        blogId: blogId,
        content: content,
        createdAt: Date.now(),
      },
    ],
  });

  if (bulkResponse.errors) {
    res.status(400).json({ error: bulkResponse });
  } else {
    res.status(200).json({ message: "INSERT COMMENT SUCCESSFUL" });
  }
};
const updateComment = async (req, res) => {
  const id = req.params.id;
  const commentUpdate = req.body;
  if (id && commentUpdate) {
    const bulkRes = await client.update({
      index: "post_comments",
      id: id,
      doc: {
        ...blog,
      },
    });
    bulkRes
      .then((resolve) => {
        res.status(200).json({ message: "UPDATE SUCCESSFUL" });
      })
      .catch((reject) => {
        res.status(400).json({ error: reject });
      });
  } else {
    res.status(404).json({ message: "ID or BODY not found" });
  }
};
export { postComment, getCommentByBlogId, updateComment };
