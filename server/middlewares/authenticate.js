const requireSignin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(403).json({ message: "User have not signed in!!!" });
  } else {
    next();
  }
};

export { requireSignin };
