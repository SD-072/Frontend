export const errorHandler = (err, _req, res, _next) => {
  console.error('\x1b[31m%s\x1b[0m', err);
  res.status(err.statusCode || 500).json({ error: err.message });
};
