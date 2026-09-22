export const auth = (req, res, next) => {
  const key = req.headers["x-api-key"];

  if (key !== process.env.API_KEY) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};
