const ApiError = require('../utils/ApiError');

function notFound(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, _next) {
  const status = err.status || 500;
  const payload = {
    error: {
      message: err.message || 'Internal Server Error',
    },
  };
  if (err.details) payload.error.details = err.details;
  if (process.env.NODE_ENV !== 'production' && status === 500) {
    payload.error.stack = err.stack;
  }
  res.status(status).json(payload);
}

module.exports = { notFound, errorHandler };
