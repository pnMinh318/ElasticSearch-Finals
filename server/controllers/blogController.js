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

const postBlog = async (req, res) => {
  const blog = req.body;
  const bulkResponse = await client.bulk({
    refresh: true,
    operations: [
      { index: { _index: "post" } },
      {
        ...blog,
      },
    ],
  });

  if (bulkResponse.errors) {
    res.status(400).json({ error: bulkResponse });
    console.log(bulkResponse);
    process.exit(1);
  } else {
    res.status(200).json({ message: "INSERT SUCCESSFUL" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const blog = req.body;

  if (id && blog) {
    const bulkRes = client.update({
      index: "post",
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

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id) {
    const bulkRes = client.delete({
      index: "post",
      id: id,
    });
    bulkRes
      .then((resolve) => {
        res.status(200).json({ message: "DELETE SUCCESSFUL" });
      })
      .catch((reject) => {
        res.status(400).json({ error: reject });
      });
  } else {
    res.status(404).json({ message: "id delete not found" });
  }
};
const searchBlog = async (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword);
  res.status(200).json({ keyword });
  if (keyword) {
    const result = client.search({
      index: "post",
      query: {
        match_all: {},
      },
    });
    result
      .then((resolve) => { //not done
        res.status(200).json({ resolve });
      })
      .catch((reject) => {
        res.status(400).json({ error: reject });
      });
  } else {
    res.status(404).json({ message: "id delete not found" });
  }
};
export { getBlogs, postBlog, updateBlog, deleteBlog, searchBlog };
