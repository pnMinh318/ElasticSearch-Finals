import { client } from "../elastic.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const documents = await client.search({
      index: "post_user",
      query: {
        match: {
          username: username,
        },
      },
    });
    console.log(documents);
    if (documents.hits.hits.length < 1) {
      res.json({ message: "User not Existed" });
    } else {
      const userInfo = documents.hits.hits[0]._source;
      if (userInfo.password === password)
        res.json({
          message: "User login successful",
          user: {
            id: documents.hits.hits[0]._id,
            username: userInfo.username,
            fullname: userInfo.fullname,
          },
        });
      else {
        res.json({ message: "Wrong password!" });
      }
    }
  }
};

const register = async (req, res) => {
  const { username, password, fullname } = req.body;
  if (username && password && fullname) {
    const usernameExisted = await client.search({
      index: "post_user",
      query: {
        match: {
          username: username,
        },
      },
    });
    if (usernameExisted.hits.hits.length > 0) {
      res.status(404).json({ message: "Username already Existed" });
    } else {
      const bulkResponse = await client.bulk({
        refresh: true,
        operations: [
          { index: { _index: "post_user" } },
          {
            username,
            password,
            fullname,
          },
        ],
      });

      if (bulkResponse.errors) {
        res.status(400).json({ message: "REGISTER FAILED" });
      } else {
        res.status(200).json({ message: "REGISTER SUCCESSFUL" });
      }
    }
  } else {
    res
      .status(404)
      .json({ message: "Username or Password or Fullname not valid!!!" });
  }
};

// const updateUser = async (req, res) => {
//   const { username, password } = req.body;
//   if (username && password) {
//     const usernameExisted = await client.search({
//       username: username,
//     });
//     if (usernameExisted) {
//       res.status(200).json({ message: "Username already Existed" });
//     } else {
//       const bulkResponse = await client.bulk({
//         refresh: true,
//         operations: [
//           { index: { _index: "user" } },
//           {
//             username,
//             password,
//           },
//         ],
//       });

//       if (bulkResponse.errors) {
//         res.status(400).json({ message: "REGISTER FAILED" });
//         console.log(bulkResponse);
//         process.exit(1);
//       } else {
//         res.status(200).json({ message: "REGISTER SUCCESSFUL" });
//       }
//     }
//   } else {
//     res.status(404).json({ message: "Username or Password not valid!!!" });
//   }
// };
// const lockUser = async (req, res) => {};
export { register, login };
