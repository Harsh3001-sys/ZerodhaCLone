const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;   // 🔥 THIS IS KEY
    next();
  } catch (err) {
    return res.json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyUser;