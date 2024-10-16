const { getUser } = require("../service/auth");
function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) return next();
  const token = tokenCookie;
  const user = getUser(token);
  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.status(400).json({ message: "no user" });
    if (!roles.includes(req.user.role))
      return res.status(200).json({ message: "success" });
    return next();
  };
}

module.exports = { checkForAuthentication, restrictTo };
