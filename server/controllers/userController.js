// import { client } from "../elastic";

// const login = async (req, res) => {
//   const { username, password } = req.body;
//   if (username && password) {
//     const user = await client.search({
//       username: username,
//       password: password,
//     });
//     if (user) {
//       //generate token
//       res.status(200).json({ user });
//     }
//   }
// };

// const register = async (req, res) => {
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
// export { register, login, updateUser, lockUser };
